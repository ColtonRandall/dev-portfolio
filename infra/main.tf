# Configure AWS
provider "aws" {
  region = "us-east-1"
}

# Create the S3 bucket
# NOSONAR: Static website bucket - logging not required for this use case
resource "aws_s3_bucket" "website" {
  bucket = "colton-website"
}

# Turn on website hosting
resource "aws_s3_bucket_website_configuration" "website" {
  bucket = aws_s3_bucket.website.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "404.html"
  }
}

# Allow public access (required for websites)
# NOSONAR: Public access is intentional for static website hosting
resource "aws_s3_bucket_public_access_block" "website" {
  bucket = aws_s3_bucket.website.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

# Policy: let anyone read the files
# NOSONAR: Public read access is required for static website hosting
resource "aws_s3_bucket_policy" "website_policy" {
  bucket     = aws_s3_bucket.website.id
  depends_on = [aws_s3_bucket_public_access_block.website]

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect    = "Allow"
      Principal = "*"
      Action    = "s3:GetObject"
      Resource  = "${aws_s3_bucket.website.arn}/*"
    }]
  })
}

# Upload all files from dist folder
resource "aws_s3_object" "files" {
  for_each = fileset("../dist", "**/*")

  bucket = aws_s3_bucket.website.bucket
  key    = each.value
  source = "../dist/${each.value}"
  etag   = filemd5("../dist/${each.value}")

  # Set correct content type based on file extension
  content_type = (
    endswith(each.value, ".css")  ? "text/css" :
    endswith(each.value, ".js")   ? "application/javascript" :
    endswith(each.value, ".html") ? "text/html" :
    endswith(each.value, ".json") ? "application/json" :
    endswith(each.value, ".png")  ? "image/png" :
    endswith(each.value, ".jpg")  ? "image/jpeg" :
    endswith(each.value, ".jpeg") ? "image/jpeg" :
    endswith(each.value, ".gif")  ? "image/gif" :
    endswith(each.value, ".svg")  ? "image/svg+xml" :
    endswith(each.value, ".ico")  ? "image/x-icon" :
    endswith(each.value, ".pdf")  ? "application/pdf" :
    "application/octet-stream"
  )
}

# Show the website URL after deployment
output "website_url" {
  value = "http://${aws_s3_bucket_website_configuration.website.website_endpoint}"
}
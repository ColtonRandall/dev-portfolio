# Create S3 bucket for static website hosting
provider "aws" {
  region = "us-east-1"
}

# Create S3 bucket
resource "aws_s3_bucket" "website" {
  bucket = "colton-website"
}

# Enable static website hosting
resource "aws_s3_bucket_website_configuration" "website" {
  bucket = aws_s3_bucket.website.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "404.html"
  }
}

# Allow public access
resource "aws_s3_bucket_public_access_block" "website" {
  bucket = aws_s3_bucket.website.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

# Let anyone read the files
resource "aws_s3_bucket_policy" "website_policy" {
  bucket = aws_s3_bucket.website.id

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

# Upload all website files
resource "aws_s3_object" "files" {
  for_each = fileset("../dist", "**/*")

  bucket = aws_s3_bucket.website.bucket
  key    = each.value
  source = "../dist/${each.value}"
}

# Website URL
output "website_url" {
  value = aws_s3_bucket_website_configuration.website.website_endpoint
}
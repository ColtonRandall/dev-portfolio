import "./CoverImage.css";

function CoverImage({ src }) {
  return (
    <>
      <img src={src} className="coverImage" />
    </>
  );
}

export default CoverImage;

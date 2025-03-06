
const GalleryItem = ({ src }) => {
  return (
    <>
      <div className="gallery-item">
        <div>div1 - dowolny tekst</div>
        <div>
          <img src={src} alt="Gallery" />
        </div>
        <div>div3 - inny tekst</div>
      </div>
    </>
  );
};
export default GalleryItem;

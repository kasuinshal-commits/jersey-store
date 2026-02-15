function ImageModal({ image, onClose }) {
    if (!image) return null;
  
    return (
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 flex justify-center items-center z-50"
      >
        <img
          src={image}
          alt="product"
          className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl"
        />
      </div>
    );
  }
  
  export default ImageModal;
  
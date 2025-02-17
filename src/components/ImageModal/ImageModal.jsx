import ReactModal from "react-modal";
import s from "./ImageModal.module.css";

const ImageModal = ({ isOpen, onClose, image }) => {
  if (!image) return null;
  const {
    urls: { regular },
    alt_description,
    likes,
    user: { name },
  } = image;
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={s.imageModel}
      overlayClassName={s.modalOverlay}
      ariaHideApp={false}
    >
      <button className={s.clsBtn} onClick={onClose}>
        ✕
      </button>
      <div className={s.modalContent}>
        <img src={regular} alt={alt_description} className={s.modalImg} />
        <p>{alt_description}</p>
        <p>❤️ Likes: {likes}</p>
        <p>📸 Author: {name}</p>
      </div>
    </ReactModal>
  );
};

export default ImageModal;

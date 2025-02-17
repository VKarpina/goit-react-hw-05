import s from "./ImageCard.module.css";

const ImageCard = ({ item, onImageClick }) => {
  const {
    urls: { small },
    alt_description,
  } = item;
  return (
    <li className={s.imageItem}>
      <div>
        <img
          className={s.image}
          src={small}
          alt={alt_description}
          onClick={() => onImageClick(item)}
        />
      </div>
    </li>
  );
};

export default ImageCard;

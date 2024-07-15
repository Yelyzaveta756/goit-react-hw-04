import css from "./ImageCard.module.css"

export const ImageCard = ({ image }) => {
    return (
      <div className={css.imageCardContainer}>
        <img className={css.imageCard} src={image.urls.small} alt={image.description || 'Image'} />
      </div>
    );
  };
import css from "./ImageCard.module.css"

export const ImageCard = ({ image }) => {
    return (
      <div>
        <img className={css.imageCard} src={image.urls.small} alt={image.description || 'Image'} />
      </div>
    );
  };
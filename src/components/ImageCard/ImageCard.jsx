import css from "./ImageCard.module.css"

export const ImageCard = ({ imageSmallSrc, imageFullSrc, altText, onImageClick}) => {
    return (
      <li>
         <div className={css.imageCardContainer}>
        <img 
        className={css.imageCard} 
        src={imageSmallSrc} 
        alt={altText || 'Image'}
        onClick={() => onImageClick({imageFullSrc, altText})} />
      </div>
      </li>
    );
  };
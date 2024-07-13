export const ImageCard = ({ image }) => {
    return (
      <div>
        <img src={image.urls.small} alt={image.description || 'Image'} />
      </div>
    );
  };
import { ImageCard } from "../ImageCard/ImageCard"
import css from "./ImageGallery.module.css"

export default function ImageGallery({images}){
  
	if (!images || images.length === 0) {
    return <p>No images found.</p>;
  }

return (
  <ul className={css.galleryList}>
  {images.map((image) => (
      <li key={image.id} className={css.galleryItems}>
          <ImageCard image={image}/>
      </li>
  ))}
</ul>

)
}
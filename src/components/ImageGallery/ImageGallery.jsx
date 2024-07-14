import { ImageCard } from "../ImageCard/ImageCard"

export default function ImageGallery({images}){
  
	if (!images || images.length === 0) {
    return <p>No images found.</p>;
  }

return (
  <ul>
  {images.map((image) => (
      <li key={image.id}>
          <ImageCard image={image}/>
      </li>
  ))}
</ul>

)
}
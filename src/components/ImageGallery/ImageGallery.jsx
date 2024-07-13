import { ImageCard } from "../ImageCard/ImageCard"

export default async function ImageGallery({ images }){
  
	if (!images || images.length === 0) {
    return null; 
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
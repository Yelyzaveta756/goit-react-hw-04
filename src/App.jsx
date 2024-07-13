import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import ImageGallery from "./components/ImageGallery/ImageGallery"
import Loader from './components/Loader/Loader'
import Error  from './components/ErrorMessage/ErrorMessage'
import { fetchImages } from './httpQuery'
import toast from 'react-hot-toast'
import './App.css'

export default function App() {

	const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [topic, setTopic] = useState("");

  const handleSearch = async (newTopic) => {
    setImages([]);
    setPage(1);
    setTopic(newTopic);
};

useEffect(() => {

  if (topic === '') {
    return;
}

  async function getImages(){
    try {
      setImages([])
      setError(false)
      setLoading(true)
      const data = await fetchImages(topic, page)
      setImages((prevImages) => [...prevImages, ...data]);
    } catch (error) {
      toast.error("Something seems to have happened, please reload this page!", {position: "top-right"});
      setError(true)
    } finally {
      setLoading(false)
    }
  }
  getImages()
}, [topic, page]);
 



  return (
      <div>
      <SearchBar onSearch={handleSearch}/>
      <Loader loading={loading} />
      {error && <Error error={error}/>}
      {images.length > 0 && (
        <ImageGallery images={images}/>)}
     
      </div>
  )
}

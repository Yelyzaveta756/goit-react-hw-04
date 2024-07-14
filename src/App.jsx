import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import ImageGallery from "./components/ImageGallery/ImageGallery"
import Loader from './components/Loader/Loader'
import Error  from './components/ErrorMessage/ErrorMessage'
import { fetchImages } from './httpQuery'
import toast, { Toaster } from 'react-hot-toast';
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
    if (!newTopic){
      toast.error("Please, enter something to search!", { position: "top-right" });
      return
    }
    setTopic(newTopic);
};

useEffect(() => {

  if (topic.trim() === '') {
    return;
}

  async function getImages(){
    try {
      setImages([])
      setError(false)
      setLoading(true)
      const data = await fetchImages(topic, page)
      console.log(data)
      if (data.length === 0) {
        toast.error("Incorrect input, try something else!", { position: "top-right" });
      } else {
        setImages((prevImages) => [...prevImages, ...data]);
        toast.success("Search successful!", { position: "top-right" });
      }
    } catch (error) {
      toast.error("Oops... Something went wrong. Please, try again.", {position: "top-right"});
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
      {loading && <Loader loading={loading} />}
      {error && <Error message={error}/>}
      {images.length > 0 && (
        <ImageGallery images={images}/>)}
        <Toaster />
      </div>
  )
}

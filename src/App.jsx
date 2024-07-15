import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import ImageGallery from "./components/ImageGallery/ImageGallery"
import Loader from './components/Loader/Loader'
import Error  from './components/ErrorMessage/ErrorMessage'
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn'
import ImageModal from "./components/ImageModal/ImageModal"
import { fetchImages } from './httpQuery'
import toast, { Toaster } from 'react-hot-toast';
import css from "./App.module.css"

export default function App() {

	const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [topic, setTopic] = useState("");
  const [loadMore, setLoadMore] = useState(false)
  const [totalPages, setTotalPages] = useState(999);

  const handleSearch = async (newTopic) => {
    setImages([]);
    setPage(1);
    if (!newTopic){
      toast.error("Please, enter something to search!", { position: "top-right" });
      setLoadMore(false);
      return
    }
    setTopic(newTopic);
};

const handleMoreBtn = () => {
  setPage(page + 1)
}

useEffect(() => {

  if (topic.trim() === '') {
    return;
}

  async function getImages(){
    try {
      setError(false)
      setLoading(true)
      setLoadMore(false);
      const data = await fetchImages(topic, page)
      console.log(data)
      setTotalPages(data.totalPages);
      if (data.length === 0 && page == 1) {
        setLoadMore(false)
        toast.error("Incorrect input, try something else!", { position: "top-right" });
      } else {
        setImages((prevImages) => [...prevImages, ...data]);
        setLoadMore(totalPages !== page);
        if (page >= totalPages) {
          setLoadMore(false)
          toast("There is no more images to show!", { position: "top-right" });
        }
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
      <div className={css.container}>
      <SearchBar onSearch={handleSearch}/>
      {loading && <Loader loading={loading} />}
      {error && <Error message={error}/>}
      {images.length > 0 && (
        <ImageGallery images={images}/>)}
        {loadMore && <LoadMoreBtn onClick={handleMoreBtn}/>}
        <Toaster />
      </div>
  )
}

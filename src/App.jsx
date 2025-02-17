import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { fetchImages } from "./services/api";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import ImageModal from "./components/ImageModal/ImageModal";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loadMore, setLoadMore] = useState(true);
  const per_page = 9;

  useEffect(() => {
    const getImages = async () => {
      if (query.trim() === "") return;
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await fetchImages(query, page, per_page);
        setImages((prev) => [...prev, ...data]);
        if (data.length === 0) {
          toast.error("No image available! Try another query!");
          setLoadMore(false);
        }
        if (data.length < per_page) {
          setLoadMore(false);
        } else {
          setLoadMore(true);
        }
      } catch {
        toast.error("This is an error!");
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getImages();
  }, [query, page, per_page]);

  const onSubmit = (newQuery) => {
    if (newQuery.trim() === "") {
      toast.error("Please enter a search term!");
      return;
    }
    setQuery(newQuery);
    setImages([]);
    setPage(1);
    setLoadMore(true);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{ duration: 4000 }}
      />
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {!isLoading && loadMore && images.length > 0 && (
        <LoadMoreBtn setPage={setPage} />
      )}
      <ImageModal
        isOpen={isOpen}
        onClose={handleCloseModal}
        image={selectedImage}
      />
    </>
  );
};

export default App;

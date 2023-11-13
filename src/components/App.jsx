import React, { useState, useEffect } from 'react';
import getPictures from 'utils/fetchImages';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import H1 from './Header/Header';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [queryData, setQueryData] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [alt, setAlt] = useState('');
  const [largeImageURL, setLargeImageURL] = useState('');
  const [totalHits, setTotalHits] = useState(0)

  useEffect(() => {
    if (query === '') {
      return
    }
    else if (query !== '' && page === 1) {
      const handleQuery = async () => {
        setIsLoading(true)
        setQueryData([])
        try {
          const images = await getPictures.fetch(query, page)
          setQueryData(images.hits)
          setTotalHits(images.totalHits)
        }
        catch (err) {
          setError(err.message)
        }
        finally {
          setIsLoading(false)
        }
      }
      handleQuery()
    }
    else if (page > 1) {
      const handleLoadMoreQuery = async () => {
        setIsLoading(true);
        try {
          const images = await getPictures.fetch(query, page);
          setQueryData((prevState) => [...prevState, ...images.hits])
        }
        catch (err) {
          setError(err.message);
        }
        finally {
          setIsLoading(false);
        }
      }
      handleLoadMoreQuery()
    }
  }, [query, page]);

  const handleSubmit = (searchQuery) => {
    if (query === searchQuery) {
      return
    }
    setQuery(searchQuery);
    setPage(1);
  }
  const handleLoadMore = async () => {
    setPage(prevState => prevState + 1)
  }
  const openModal = (tags, largeImageURL) => {
    setIsModalOpen(true);
    setAlt(tags);
    setLargeImageURL(largeImageURL);
  }
  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <>
      <Searchbar onSubmit={handleSubmit} />
      <H1 />
      {error && <p className="error">Oh crap! Something went wrong: {error}</p>}
      {isLoading && < Loader />}
      {queryData.length > 0 ? (
        <>
          <ImageGallery images={queryData} openModal={openModal} />
          {queryData.length !== totalHits && <Button onClick={handleLoadMore} label={"Load More"} />}
        </>
      ) : (
        <p className="noResult">Type in anything to search for images.</p>
      )}
      {isModalOpen && <Modal isModalOpen={isModalOpen} closeModal={closeModal} alt={alt} largeImageURL={largeImageURL} />}
    </>
  )
}
  
export default App
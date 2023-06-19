import React, { Component } from 'react';
import getPictures from 'utils/fetchImages';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';

class App extends Component {
  state = {
    isLoading: false,
    queryData: [],
    q: '',
    page: 1,
    error: null,
    isModalOpen: false,
    alt: '',
    largeImageURL: '',
  };

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.q !== prevState.q) {
      this.handleQuery();
    }
    if (this.state.page !== prevState.page && this.state.q === prevState.q) {
      this.handleLoadMoreQuery();
    }
  }

  handleSubmit = (searchQuery) => {
    if (this.state.q === searchQuery) { 
      return
    }
    this.setState({ q: searchQuery, page: 1 });
  };

  handleQuery = async () => {
    const { q, page } = this.state;
    this.setState({ isLoading: true, queryData: [] });
    try {
      const images = await getPictures.fetch(q, page);
      this.setState({
        queryData: images.hits,
      })
    }
    catch (err) {
      this.setState({ error: err.message })
    }
    finally {
      this.setState({ isLoading: false })
    }
  }

  handleLoadMore = async () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  }

  handleLoadMoreQuery = async () => {
    const { q, page } = this.state;
    this.setState({ isLoading: true });
    try {
      const images = await getPictures.fetch(q, page);
      this.setState(prevState => ({
        queryData: [...prevState.queryData, ...images.hits,]
      }))
    }
    catch (err) {
      this.setState({ error: err.message })
    }
    finally {
      this.setState({ isLoading: false })
    }
  }
  openModal = (tags, largeImageURL) => {
    this.setState({ isModalOpen: true, alt: tags, largeImageURL: largeImageURL })
  }
  closeModal = () => {
    this.setState({ isModalOpen: false });
  }

  render() {
    const { isLoading, queryData, error, isModalOpen, alt, largeImageURL, buttonLabel } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        {error && <p className="error">Oh crap! Something went wrong: {error}</p>}
        {isLoading && < Loader />}
        {queryData.length > 0 ? (
          <>
            <ImageGallery images={queryData} openModal={this.openModal} />
            <Button onClick={this.handleLoadMore} label={"Load More"} />
          </>
        ) : <p className="noResult">No results</p>}
        {isModalOpen && <Modal isModalOpen={isModalOpen} closeModal={this.closeModal} alt={alt} largeImageURL={largeImageURL} />}
      </>
    )
  }
}
export default App
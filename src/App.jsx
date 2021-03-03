
import Searchbar from './components/searchbar';
import React, { Component } from 'react'
import ImageGallery from './components/imageGallery';
import Button from './components/button';
import Loader from './components/loader';

import axios from "axios"
import Modal from './components/modal';

export default class App extends Component {

  state = {
    pictures: [],
    searchQuery: '',
    loading: false,
    page: 1,
    modalOpen: false,
    modalUrl: '',
  }

  componentDidUpdate(_prevProps, prevState) {
    if (prevState.page !== this.state.page && prevState.page !== 1) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  onSubmit = async (query) => {
    await this.setState({ pictures: [], searchQuery: query, loading: true, page: 1 })

    this.fetchQuery()

  }

  fetchQuery = () => {
    const url = `https://pixabay.com/api/?q=${this.state.searchQuery}&page=${this.state.page}
    &key=20201719-2c6bddc3b6de2ae59c417e3e6&image_type=photo&orientation=horizontal&per_page=12`

    axios
      .get(url)
      .then(data => {

        this.setState((prevState) => ({ pictures: [...prevState.pictures, ...data.data.hits], page: prevState.page + 1 }))
      })
      .catch(error => { console.log(error) })
      .finally(() => this.setState({ loading: false }))
  }

  loadMore = () => {
    this.fetchQuery()

  }

  openModal = (url) => {
    this.handleToggleModal()
    this.setState({ modalUrl: url })
  }

  handleToggleModal = () => {
    this.setState((prevState) => ({ modalOpen: !prevState.modalOpen }));
  };

  render() {
    const { loading, pictures, modalOpen, modalUrl } = this.state


    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        {!!pictures.length && <ImageGallery pictures={pictures} openModal={this.openModal} />}
        {loading && < Loader />}
        { !!pictures.length && <Button loadMore={this.loadMore} />}
        {modalOpen && <Modal onClose={this.handleToggleModal} modalUrl={modalUrl} />}
      </>

    )
  }
}



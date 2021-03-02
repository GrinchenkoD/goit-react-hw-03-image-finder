
import Searchbar from './components/searchbar';
import React, { Component } from 'react'
import ImageGallery from './components/imageGallery';
import Button from './components/button';
import Loader from './components/loader';

import axios from "axios"

export default class App extends Component {

  state = {
    pictures: [],
    searchQuery:'',
    loading: false,
    page:1,
  }
  
  onSubmit = (query) => {
    this.setState({pictures:[], searchQuery:query, loading: true, page: 1})

    this.fetchQuery()
  
  }

  fetchQuery = () => {
    const url = `https://pixabay.com/api/?q=${this.state.searchQuery}&page=${this.state.page}
    &key=20201719-2c6bddc3b6de2ae59c417e3e6&image_type=photo&orientation=horizontal&per_page=12`

    axios
      .get(url)
      .then(data => {
        
        this.setState((prevState)=>({pictures:[...prevState.pictures, ...data.data.hits]}))
      })
      .catch(error => { console.log(error) })
      .finally(() => this.setState({ loading: false }))
  }

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
    this.fetchQuery()
  }

  render() {
  const {loading, pictures} =this.state


    return (
    <div>
      <Searchbar onSubmit={this.onSubmit }/>
        <ImageGallery pictures={ pictures}/>
        {loading && < Loader />}
        { pictures.length>0 && <Button loadMore={this.loadMore} />}

    </div>
    
    )
  }
}



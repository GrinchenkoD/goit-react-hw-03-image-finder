
import Searchbar from './components/searchbar';
import React, { Component } from 'react'
import ImageGallery from './components/imageGallery';
import Button from './components/button';
import Loader from './components/loader';

export default class App extends Component {

  state = {
    pictures: [],
    loading: false,
    page:1,
  }
  


  render() {
  const {loading, pictures} =this.state


    return (
    <div>
      <Searchbar onSubmit={1 }/>
      <ImageGallery />
        {loading && < Loader />}
        { pictures.length>0 && <Button loadMore={1} />}

    </div>
    
    )
  }
}



//https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=20201719-2c6bddc3b6de2ae59c417e3e6
// & image_type=photo & orientation=horizontal & per_page=12
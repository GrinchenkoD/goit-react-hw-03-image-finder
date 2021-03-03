import React, { Component } from 'react'

import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem'


export default class ImageGallery extends Component {
    render() {
        return (
            <ul className="ImageGallery">
                {this.props.pictures.map(picture => {
                    const { id, webformatURL, largeImageURL } = picture
                    return <ImageGalleryItem key={id} webformatURL={webformatURL}
                        largeImageURL={largeImageURL} openModal={this.props.openModal} />
                })}

            </ul>
        )
    }
}

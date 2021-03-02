import React from 'react'

function ImageGalleryItem({ webformatURL, largeImageURL, }) {

    return (
        <li className="ImageGalleryItem">
            <img src={webformatURL} alt="" className="ImageGalleryItem-image" data-url={largeImageURL} />
        </li>
    )
}

export default ImageGalleryItem

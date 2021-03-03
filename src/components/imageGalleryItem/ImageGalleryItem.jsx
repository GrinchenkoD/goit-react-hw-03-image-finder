import React from 'react'

function ImageGalleryItem({ webformatURL, largeImageURL, openModal }) {
    const handleClick = (event) => {
        const { url } = event.target.dataset
        openModal(url)
    }

    return (
        <li className="ImageGalleryItem">
            <img src={webformatURL} alt="" className="ImageGalleryItem-image"
                data-url={largeImageURL} onClick={handleClick} />
        </li>
    )
}

export default ImageGalleryItem

import PropTypes from 'prop-types'
import React from 'react'
import css from './ImageGallery.module.css'

const ImageGalleryItem = ({ tags, largeImageURL, webformatURL, openModal }) => {
    
    const onClick = () => {
        openModal(tags, largeImageURL);
    }
    return (
        <li
            className={css.imageGalleryItem} onClick={onClick}>
            <img
                className={css.imageGalleryItemImage}
                src={webformatURL}
                alt={tags}
                data-source={largeImageURL}
                loading="lazy"
            />
        </li>
    )
};

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string,
    openModal: PropTypes.func.isRequired,
}

export default ImageGalleryItem
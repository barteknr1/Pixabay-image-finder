import PropTypes from 'prop-types'
import React, { Component } from 'react'
import ImageGalleryItem from './ImageGalleryItem'
import css from './ImageGallery.module.css'

class ImageGallery extends Component {
    render() {
        const { images, openModal } = this.props;
        return (
            <ul
                className={css.imageGallery}>
                {images.map((image) =>
                    <ImageGalleryItem
                        openModal={openModal}
                        key={image.id}
                        webformatURL={image.webformatURL}
                        largeImageURL={image.largeImageURL}
                        tags={image.tags}
                    />
                )}
            </ul>
        )
    }
}

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
        tags: PropTypes.string,
    }).isRequired).isRequired,
    openModal: PropTypes.func.isRequired,
}

export default ImageGallery
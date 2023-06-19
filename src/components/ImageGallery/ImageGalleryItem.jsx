import PropTypes from 'prop-types'
import React, { Component } from 'react'
import css from './ImageGallery.module.css'

class ImageGalleryItem extends Component {
    onClick = () => {
        const { tags, largeImageURL } = this.props;
        this.props.openModal(tags, largeImageURL);
    }
    render() {
        const { webformatURL, largeImageURL, tags } = this.props;
        return (
            <li
                className={css.imageGalleryItem} onClick={this.onClick}>
                <img
                    className={css.imageGalleryItemImage}
                    src={webformatURL}
                    alt={tags}
                    data-source={largeImageURL}
                    loading="lazy"
                />
            </li>
        )
    }
}

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string,
    openModal: PropTypes.func.isRequired,
}

export default ImageGalleryItem
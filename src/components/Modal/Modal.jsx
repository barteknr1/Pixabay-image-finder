import PropTypes from 'prop-types'
import React, { Component } from 'react'
import css from './Modal.module.css'

class Modal extends Component {
    constructor(props){
    super(props);
    this.onEscapeClose = this.onEscapeClose.bind(this);
    }
    onEscapeClose(e) {
        if (e.key === 'Escape') {
            this.props.closeModal();
        }
    }
    componentDidMount(){
    document.addEventListener("keydown", this.onEscapeClose, false);
    }
    componentWillUnmount(){
    document.removeEventListener("keydown", this.onEscapeClose, false);
    }

    render() {
        const { closeModal, alt, largeImageURL } = this.props;
        return (
            <div className={css.overlay} onClick={closeModal}>
                <div className={css.modal}>
                    <img src={largeImageURL} alt={alt} />
                </div>
            </div>
        )
    }
}

Modal.propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    alt: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
}

export default Modal
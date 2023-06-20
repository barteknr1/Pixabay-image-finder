import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import css from './Modal.module.css'

const Modal = ({ closeModal, alt, largeImageURL }) => {

    useEffect(() => {
        const onEscapeClose = (e) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        }
        document.addEventListener("keydown", onEscapeClose, false);
        return () => {
            document.removeEventListener("keydown", onEscapeClose, false);
        }
    }, [closeModal]);
    
    return (
        <div className={css.overlay} onClick={closeModal}>
            <div className={css.modal}>
                <img src={largeImageURL} alt={alt} />
            </div>
        </div>
    )
}

Modal.propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    alt: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
}

export default Modal
import PropTypes from 'prop-types'
import React from 'react'
import css from './Button.module.css'

const Button = ({onClick, label}) => {
    return (
        <button
            className={css.button}
            onClick={onClick}>
            {label}
        </button>
    )
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
}

export default Button
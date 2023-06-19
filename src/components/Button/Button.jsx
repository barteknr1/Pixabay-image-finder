import PropTypes from 'prop-types'
import React, { Component } from 'react'
import css from './Button.module.css'

class Button extends Component {
    render() {
            const { onClick, label } = this.props;
        return (
            <button
                className={css.button}
                onClick={onClick}>
                {label}
            </button>
        )
    }
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
}

export default Button
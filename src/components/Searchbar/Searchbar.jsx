import PropTypes from 'prop-types'
import React, { useState } from 'react'
import css from './Searchbar.module.css'

const Searchbar = ({ onSubmit }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
        const { value } = e.target;
        setSearchQuery(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(searchQuery);
    };
    
    return (
        <header
            className={css.searchBar}>
            <form
                className={css.searchForm}
                onSubmit={handleSubmit}>
                <button type="submit" className={css.searchFormButton}>
                    <span
                        className={css.searchFormButtonLabel}>Search</span>
                </button>
                <input
                    value={searchQuery}
                    onChange={handleChange}
                    className={css.searchFormInput}
                    name="searchFormInput"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </form>
        </header>
    )
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default Searchbar

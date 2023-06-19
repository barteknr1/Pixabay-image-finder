import PropTypes from 'prop-types'
import React, { Component } from 'react'
import css from './Searchbar.module.css'

class Searchbar extends Component {
    state = {
        searchQuery: '',
    };
    handleChange = (e) => {
        e.preventDefault();
        const { value } = e.target;
        this.setState({ searchQuery: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { searchQuery } = this.state;
        this.props.onSubmit(searchQuery);
    };
    
    render() {
        const { searchQuery } = this.state;
        return (
            <header
                className={css.searchBar}>
                <form
                    className={css.searchForm}
                    onSubmit={this.handleSubmit}>
                    <button type="submit" className={css.searchFormButton}>
                        <span
                            className={css.searchFormButtonLabel}>Search</span>
                    </button>
                    <input
                        value={searchQuery}
                        onChange={this.handleChange}
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
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default Searchbar

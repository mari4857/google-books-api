import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {

    state = {
        searchInput: ''
    }

    handleSearchInput = ( searchEvent ) => {
        this.setState({
            searchInput: searchEvent.target.value
        });
    }

    render() {
        const { handleSearchSubmit } = this.props;
        const { searchInput } = this.state;

        return (
            <div className="search-container">
                <form className="search-form"
                    onSubmit={ submitEvent => handleSearchSubmit(submitEvent, searchInput) }>
                    <label htmlFor="search">Search:</label>
                    <input
                        className='search-input'
                        type="text"
                        name="search"
                        placeholder="Henry"
                        onChange={ this.handleSearchInput } />
                    <button type="submit" className='search-button'>Search</button>
                </form>
            </div>
        )
    }
}

export default SearchBar;
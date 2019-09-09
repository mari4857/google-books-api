import React, { Component } from 'react';
import './App.css';

import SearchBar from './SearchBar';
import BookList from './BookList';
import Filter from './Filter';

class App extends Component {

  state = {
    bookResults: this.props.starterBookResults,
    // searchQuery: 'lord+of+the+rings',
    searchQuery: 'Henry',
    bookFilter: '',
    printFilter: ''
  }

  handleSearchSubmit = ( searchSubmitEvent, searchInput ) => {
    searchSubmitEvent.preventDefault();
    this.setState({
      searchQuery: searchInput
    });
    const baseUrl = 'https://www.googleapis.com/books/v1/volumes'
    const key = 'AIzaSyCIDUevtXNCgdeFFj3mZfLYSMfT7Nw0Hlk';
    const formattedSearchUrl = this.formatQuery( baseUrl, searchInput, key );
    fetch( formattedSearchUrl )
        .then(response => {
          if(!response.ok) {
            throw new Error('Something went wrong on the network. Please try again later.');
          }
          return response;
        })
        .then(response => response.json())
        .then(bookResultsObj => {
          console.log('Good response From Google Books API: ', bookResultsObj)
          this.setState({
            bookResults: bookResultsObj,
            error: null
          });
        })
        .catch(error => {
          this.setState({
            error: error.message
          });
        });
  }

  formatQuery = ( baseUrl, searchInput, key ) => {
    // example https://www.googleapis.com/books/v1/volumes?q=time&printType=magazines&key=yourAPIKey
    const { bookFilter, printFilter } = this.state;
    let formattedQuery;
    if ( searchInput !== '') {
      formattedQuery = '?q=' + searchInput;
    }
    if ( bookFilter !== '') {
      formattedQuery = formattedQuery + '&filter=' + bookFilter;
    }
    if ( printFilter !== '') {
      formattedQuery = formattedQuery + '&bookType=' + printFilter;
    }
    const formattedUrl  = baseUrl + formattedQuery + '&key=' + key;
    console.log('formatted URL: ', formattedUrl);
    return formattedUrl;
  }

  handlePrintType = ( printTypeFormEvent ) => {
    if ( printTypeFormEvent ) {
      this.setState({
        printFilter: printTypeFormEvent
      });
    }
  }

  handleBookType = ( bookTypeFormEvent ) => {
    if ( bookTypeFormEvent ) {
      this.setState({
        bookFilter: bookTypeFormEvent
      });
    }
  }

  render() {
    const { bookResults } = this.state;

    // don't show filter selectors on mobile. Bad UX.
    const isMobile = window.innerWidth <= 500;
    let responsiveFilter;
    if ( isMobile ) {
      responsiveFilter = null;
    } else {
      responsiveFilter = <Filter
          handlePrintType={ this.handlePrintType }
          handleBookType={ this.handleBookType } />
    }

    return (
        <main className='App'>
          <header className='header'>
            <h1 className='header-title'>Google Book Search</h1>
          </header>
          <SearchBar
              handleSearchSubmit={ this.handleSearchSubmit }/>
          { responsiveFilter }
          <BookList
              bookResults={ bookResults } />
        </main>
    );
  }
}

export default App;
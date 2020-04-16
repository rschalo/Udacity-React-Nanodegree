import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchResults from './SearchResults';

class Search extends Component {
  state = {
    query: '',
  };

  //TODO: move searchbooks into app.js

  /*
  lifts searchbooks to app, now pass state with
  searchbooks back down and pass to a search results component
  */
  // TODO: let's rewrite how searchbooks is defined in app.js
  //searchBooks is receiving an undefined value and catching on .map
  handleChange = (e) => {
    const value = e.target.value;
    if (value.length > 0) {
      this.setState({ query: value }, () => {
        this.props.searchNewBooks(value);
      });
    } else {
      this.setState({ query: '' }, () => {
        this.props.searchNewBooks(this.state.query);
      });
    }
  };

  render() {
    const { query } = this.state;
    const { searchBooks, sortBooks, books, resetSearch } = this.props;
    console.log(searchBooks);

    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link to='/'>
            <button className='close-search' onClick={resetSearch}>
              Close
            </button>
          </Link>
          <div className='search-books-input-wrapper'>
            <input
              type='text'
              placeholder='Search by title or author'
              value={query}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <SearchResults
          searchBooks={searchBooks}
          sortBooks={sortBooks}
          books={books}
        />
      </div>
    );
  }
}

export default Search;

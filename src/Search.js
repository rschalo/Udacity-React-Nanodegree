import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Search extends Component {
  state = {
    query: ''
  };
  // used as callback will update the input field live
  updateQuery = query => {
    this.setState(() => ({
      query: query
    }));
  };

  clearQuery = () => {
    this.updateQuery('');
  };
  render() {
    const { query } = this.state;

    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link className='close-search' to='/'>
            Close
          </Link>
          <div className='search-books-input-wrapper'>
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            {/* update text field as input is given */}
            <input
              type='text'
              placeholder='Search by title or author'
              value={query}
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
          <button className='clear-search-button' onClick={this.clearQuery}>Clear Search Bar</button>
        </div>
        <div className='search-books-results'>
          <ol className='books-grid' />
        </div>
      </div>
    );
  }
}

export default Search;

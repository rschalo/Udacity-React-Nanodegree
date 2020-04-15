import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

class Search extends Component {
  state = {
    query: '',
    results: []
  };
  // used as callback will update the input field live
  updateQuery = query => {
    this.setState(() => ({
      query: query
    }));
    if (this.state.query && this.state.query.length > 1) {
      this.getInfo();
    }
  };

  updateResults = results => {
    this.setState(() => ({
      results: results
    }));
  };
  
  getInfo = () => {
    BooksAPI.search(this.state.query).then(books => {
      this.setState(() => ({
        results: books
      }));
    });
  };
  
  clearQuery = () => {
    this.updateQuery('');
    this.updateResults([]);
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState(() => ({
        books: books,
        isLoaded: true
      }))
    });
  }

  render() {
    const { query, results } = this.state;
    console.log(typeof(results));

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
          <button className='clear-search' onClick={this.clearQuery}>
          </button>
        </div>
        <div className='search-books-results'>
          <ol className='books-grid'>
            {results.length > 0 &&
              results.map(book => (
                <li key={book.id}>
                  <div className='book'>
                    <div className='book-top'>
                      <div className='book-shelf-changer'>
                        {/* https://github.com/facebook/react/issues/2803#issuecomment-314426759 for handling a disabled select tag option*/}
                        {/* Default options, like 'Move...' need to have a value equal to the valid empty state for the select. That way, React can associate the value attribute of the select and option tag to know what should be selected.*/}
                        <select
                          defaultValue=''
                          onChange={event => this.props.sortBooks(event, book)}
                        >
                          <option value='' disabled>
                            Move...
                          </option>
                          <option value='currentlyReading'>
                            Currently Reading
                          </option>
                          <option value='wantToRead'>Want to Read</option>
                          <option value='read'>Read</option>
                          <option value='none'>None</option>
                        </select>
                      </div>
                    </div>
                    <div className='book-title'>{`${book.title}`}</div>
                    <div className='book-authors'>{`${book.authors}`}</div>
                  </div>
                </li>
              ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;

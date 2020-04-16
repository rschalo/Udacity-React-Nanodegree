import React, { Component } from 'react';
import Book from './Book';

class SearchResults extends Component {
  render() {
    const { searchBooks, sortBooks } = this.props;

    return (
      <div className='search-books-results'>
        <ol className='books-grid'>
          {searchBooks.length > 0 && searchBooks !== undefined ? (
            searchBooks.map((book) => (
              <Book
                key={book.id}
                book={book}
                shelf={book.shelf ? book.shelf : 'none'}
                sortBooks={sortBooks}
              />
            ))
          ) : (
            <div />
          )}
        </ol>
      </div>
    );
  }
}

export default SearchResults;

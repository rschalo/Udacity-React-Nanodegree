import React, { Component } from 'react';
import Book from './Book';

class SearchResults extends Component {
  render() {
    const { searchBooks, sortBooks } = this.props;
// TODO: fix "cannot read property 'map' of undefined" at line 8
// I think this is happening because searchBooks is defined as undefined when empty
    
    return (
      <div className='search-books-results'>
        <ol className='books-grid'>
          {(searchBooks.length > 0 && searchBooks !== undefined) ? 
            searchBooks.map(book => (
            <Book
              key={book.id}
              book={book}
              shelf={book.shelf ? book.shelf : 'none'}
              sortBooks={sortBooks}
            />
            )) : 
            <div></div>
          }
        </ol>
      </div>
    );
  }
}

export default SearchResults;

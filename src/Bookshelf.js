import React, { Component } from 'react';
import Book from './Book';

class Bookshelf extends Component {
  render() {
    const { books, sortBooks, bookshelfName } = this.props;

    return (
      <div className='bookshelf'>
        <h2 className='bookshelf-title'>{bookshelfName}</h2>
        <div className='bookshelf-books'>
          <ol className='books-grid'>
            {books.length > 0 && books !== undefined ? (
              books.map((book) => (
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
      </div>
    );
  }
}

export default Bookshelf;

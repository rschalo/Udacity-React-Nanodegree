import React, { Component } from 'react';
import Book from './Book';

class Bookshelf extends Component {
  //bookshelf doesn't need state but there needs to be a setState(books.shelf)
  //shelf in db is set to one of: currentlyReading, wantToRead, read
  //change shelf should be a button or 'sub'component that sets that state
  //bookshelf list will simply show books mapped to shelf, no state required
  //books passed in as props

  render() {
    const { books, sortBooks, bookshelfName } = this.props;

    return (
      <div className='bookshelf'>
        <h2 className='bookshelf-title'>{bookshelfName}</h2>
        <div className='bookshelf-books'>
          <ol className='books-grid'>
              {(books.length > 0 && books !== undefined) ? 
                books.map(book => (
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
      </div>
    );
  }
}

export default Bookshelf;

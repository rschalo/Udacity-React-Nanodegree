import React, { Component } from 'react';
import BookshelfChanger from './BookshelfChanger';

class Bookshelf extends Component {
  //bookshelf doesn't need state but there needs to be a setState(books.shelf)
  //shelf in db is set to one of: currentlyReading, wantToRead, read
  //change shelf should be a button or 'sub'component that sets that state
  //bookshelf list will simply show books mapped to shelf, no state required
  //books passed in as props

  render() {
    const { books, sortBooks, bookshelfName, shelf } = this.props;

    return (
      <div className='bookshelf'>
        <h2 className='bookshelf-title'>{bookshelfName}</h2>
        <div className='bookshelf-books'>
          <ol className='books-grid'>
            {books.map(book => (
              <li key={book.id}>
                <div className='book'>
                  <div className='book-top'>
                    <img
                      src={book.imageLinks.thumbnail}
                      className='book-cover'
                      alt='Book cover'
                    />
                    <BookshelfChanger
                      sortBooks={sortBooks}
                      book={book}
                      shelf={shelf}
                    />
                  </div>
                  <div className='book-title'>{book.title}</div>
                  <div className='book-authors'>{book.authors.join(', ')}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Bookshelf;

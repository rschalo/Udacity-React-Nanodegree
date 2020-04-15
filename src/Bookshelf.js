import React, { Component } from 'react';

class Bookshelf extends Component {
  //bookshelf doesn't need state but there needs to be a setState(books.shelf)
  //shelf in db is set to one of: currentlyReading, wantToRead, read
  //change shelf should be a button or 'sub'component that sets that state
  //bookshelf list will simply show books mapped to shelf, no state required
  //books passed in as props

  render() {
    const { books, bookshelfName } = this.props;

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

export default Bookshelf;

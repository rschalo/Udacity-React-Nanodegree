import React, { Component } from "react";

class Bookshelf extends Component {
  //what if I do a filter map for this in the component?
  //bookshelf doesn't need to be state but there needs to be a setState(books.shelf)
  //shelf in db is set to one of: currentlyReading, wantToRead, read
  //change shelf should be a button or 'sub'component that sets that state
  //bookshelf list will simply show books mapped to shelf, no state required
  //books passed in as props
  /*TODO add button that allows the changing of book.shelf
  <select>
    <option value="move" disabled>Move to...</option>
    <option value="currentlyReading">Currently Reading</option>
    <option value="wantToRead">Want to Read</option>
    <option value="read">Read</option>
    <option value="none">None</option>
  </select>*/

  render() {
    const { books, handleChange, bookshelfName } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{bookshelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => (
              <li>
                <div key={book.title} className="book">
                  <div className="book-top">
                    <img
                      src={book.imageLinks.thumbnail}
                      className="book-cover"
                      alt="Book cover"
                    />
                    <div className="book-shelf-changer">
                      <select id='assignNewShelf' onChange={handleChange}>
                        <option value="move" disabled>
                          Move to...
                        </option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>

                  <div className="book-title">{`${book.title}`}</div>
                  <div className="book-authors">{`${book.authors}`}</div>
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
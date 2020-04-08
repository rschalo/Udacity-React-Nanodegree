import React, { Component } from "react";

class WantToRead extends Component {
  //what if I do a filter map for this in the component?
  //bookshelf doesn't need to be state but there needs to be a setState(books.shelf)
  //shelf in db is set to one of: currentlyReading, wantToRead, read
  //change shelf should be a button or 'sub'component that sets that state
  //bookshelf list will simply show books mapped to shelf, no state required
  //books passed in as props
  render() {
    const { books } = this.props;
    const currentlyReading = books.filter(
      (b) => b.shelf === "wantToRead"
    );

    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {currentlyReading.map((book) => (
            <li>
              <div key={book.title} className="book">
                <div className="book-top">
                  <img
                    src={book.imageLinks.thumbnail}
                    className="book-cover"
                    alt="Book cover"
                  />
                </div>
                <div className="book-title">{`${book.title}`}</div>
                <div className="book-authors">{`${book.authors}`}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default WantToRead;

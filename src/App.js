import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import * as BooksAPI from './BooksAPI';
import Bookshelf from './Bookshelf';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll()
    .then((books) => {
      this.setState(() => ({
        books
      }))
    })
  };
  // Callback from Bookshelf <select sortBooks> happens here
  sortBooks = (event, book) => {
    const { books } = this.state;
    // value the user selected
    const { value } = event.target;
    // gets the book we want to update
    const bookToUpdate = books.filter(b => b.id === book.id)[0];
    // updates the shelf property with the selected value
    bookToUpdate.shelf = value;
    // gets the old book array, and omit the old book value
    const booksArray = books.filter(b => b.id !== book.id);
    // push the updated book into the "new" books array, and update state
    booksArray.push(bookToUpdate);
    // updates the state with new books array
    this.setState({ books: booksArray });
    BooksAPI.update(bookToUpdate, value);
  };


  render() {
    const { books } = this.state;
    const currentlyReading = books.filter((b) => b.shelf === 'currentlyReading');
    const wantToRead = books.filter((b) => b.shelf === 'wantToRead');
    const read = books.filter((b) => b.shelf === 'read');

    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
          <div>
            <div className="list-books-content">
              <div>
                  <Bookshelf 
                    bookshelfName={'Currently Reading'} 
                    books={currentlyReading} 
                    sortBooks={this.sortBooks}
                    />
                  <Bookshelf 
                    bookshelfName={'Want to Read'} 
                    books={wantToRead} 
                    sortBooks={this.sortBooks}
                  />
                  <Bookshelf 
                    bookshelfName={'Have Read'} 
                    books={read} 
                    sortBooks={this.sortBooks}
                  />
                </div>
              </div>
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp

import React from 'react';
import './App.css';
import * as BooksAPI from './BooksAPI';
import Bookshelves from './Bookshelves';
import Search from './Search.js';
import { Route } from 'react-router-dom';

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
    BooksAPI.getAll().then(books => {
      this.setState(() => ({
        books
      }));
    });
  }
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
    // push the updated book into the 'new' books array, and update state
    booksArray.push(bookToUpdate);
    // updates the state with new books array
    this.setState({ books: booksArray });
    // update the database for data persistence
    BooksAPI.update(bookToUpdate, value);
  };

  render() {
    const { books } = this.state;
    // filter out books by their state.book.shelf and pass as props
    const currentlyReading = books.filter(b => b.shelf === 'currentlyReading');
    const wantToRead = books.filter(b => b.shelf === 'wantToRead');
    const read = books.filter(b => b.shelf === 'read');

    return (
      <div className='app'>
        <Route
          exact
          path='/'
          render={() => (
            <Bookshelves
              currentlyReading={currentlyReading}
              wantToRead={wantToRead}
              read={read}
              sortBooks={this.sortBooks}
            />
          )}
        />
        <Route
          path='/search'
          component={Search} 
        />
      </div>
    );
  }
}

export default BooksApp;

import React from 'react';
import './App.css';
import * as BooksAPI from './BooksAPI';
import Bookshelves from './Bookshelves';
import Search from './Search.js';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    books: [],
    searchBooks: [],
    isLoaded: false,
  };

  // initial set state for user's existing books
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books: books,
        isLoaded: true,
      }));
    });
  }

  // Search.js provides the query value
  searchNewBooks = (query) => {
    if (query.length > 0) {
      BooksAPI.search(query).then((books) => {
        this.setState({ searchBooks: books });
      });
    } else {
      this.setState({ searchBooks: {} });
    }
  };

  // Bookshelf.js provides the book, shelf values
  // If a book is updated on Bookshelf.js to 'none' then filter out of displayed results
  // If a book is updated on Search.js, concat the book into books and display on Bookshelf.js
  sortBooks = (book, shelf) => {
    BooksAPI.update(book, shelf);
    if (shelf === 'none') {
      this.setState((prevState) => ({
        books: prevState.books.filter((b) => b.id !== book.id),
      }));
    } else {
      book.shelf = shelf;
      this.setState((prevState) => ({
        books: prevState.books.filter((b) => b.id !== book.id).concat(book),
      }));
    }
  };

  // Used in Search.js to clear searchBooks when a user closes the Search.js Route
  resetSearch = () => {
    this.setState({
      searchBooks: [],
    });
  };

  render() {
    const { books, searchBooks } = this.state;
    // filter out books by their state.book.shelf and pass as props
    const currentlyReading = books.filter(
      (b) => b.shelf === 'currentlyReading'
    );
    const wantToRead = books.filter((b) => b.shelf === 'wantToRead');
    const read = books.filter((b) => b.shelf === 'read');

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
          render={() => (
            <Search
              books={books}
              searchNewBooks={this.searchNewBooks}
              sortBooks={this.sortBooks}
              resetSearch={this.resetSearch}
              searchBooks={searchBooks}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;

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
    isLoaded: false
  };
  // use searchBooks, pass to Search route

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState(() => ({
        books: books,
        isLoaded: true
      }));
    });
  }
  // callback from search.js
  searchNewBooks = (query => {
    if (query.length > 0) {
      BooksAPI.search(query).then(books => { this.setState({ searchBooks: books });
       })
      } else {
      this.setState({ searchBooks: {} })
    };
  });

  // Callback from Bookshelf <select sortBooks> happens here
  sortBooks = (book, shelf) => {
    BooksAPI.update(book, shelf);
    if (shelf === 'none') {
      this.setState(prevState => ({
        books: prevState.books.filter(b => b.id !== book.id)
      }));
    } else {
      book.shelf = shelf;
      this.setState(prevState => ({
        books: prevState.books.filter(b => b.id !== book.id).concat(book)
      }));
    }
  };

  resetSearch = () => {
    this.setState({
      searchBooks: []
    });
  };

  render() {
    const { books, searchBooks } = this.state;
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

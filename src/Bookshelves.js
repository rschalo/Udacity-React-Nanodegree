import React, { Component } from 'react';
import Bookshelf from './Bookshelf';
import { Link } from 'react-router-dom';

class Bookshelves extends Component {
  render() {
    return (
      <div>
        <div className='list-books'>
          <div className='list-books-title'>
            <h1>MyReads</h1>
          </div>
          <div>
            <div className='list-books-content'>
              <div>
                <Bookshelf
                  bookshelfName={'Currently Reading'}
                  books={this.props.currentlyReading}
                  sortBooks={this.props.sortBooks}
                  shelf={'currentlyReading'}
                />
                <Bookshelf
                  bookshelfName={'Want to Read'}
                  books={this.props.wantToRead}
                  sortBooks={this.props.sortBooks}
                  shelf={'wantToRead'}
                />
                <Bookshelf
                  bookshelfName={'Have Read'}
                  books={this.props.read}
                  sortBooks={this.props.sortBooks}
                  shelf={'haveRead'}
                />
              </div>
              <Link to='/search' className='open-search'>
                <button>Add a Book</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bookshelves;

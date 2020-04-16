import React, { Component } from 'react';

class BookshelfChanger extends Component {
  state = {
    value: this.props.shelf
  };
  handleChange = event => {
    const { value } = event.target;
    this.setState({ value });
    this.props.sortBooks(this.props.book, value);
  };
  render() {
    return (
      <div className='book-shelf-changer'>
      {/* https://github.com/facebook/react/issues/2803#issuecomment-314426759 for handling a disabled select tag option
       Default options, like 'Move...' need to have a value equal to the valid empty state for the select. 
       That way, React can associate the value attribute of the select and option tag to know what should be selected.*/}
        <select defaultValue='' onChange={this.handleChange}>
          <option value='' disabled>
            Move...
          </option>
          <option value='currentlyReading'>Currently Reading</option>
          <option value='wantToRead'>Want to Read</option>
          <option value='read'>Read</option>
          <option value='none'>None</option>
        </select>
      </div>
    );
  }
}

export default BookshelfChanger;

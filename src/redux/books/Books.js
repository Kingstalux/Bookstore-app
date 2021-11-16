import React from 'react';

const Books = () => (
  <div>
    <div className="book-list" />
    <br />
    <form>
      <input placeholder="book title" />
      <br />
      <input placeholder="book author" />
      <br />
      <button type="submit">Add Book</button>
    </form>
  </div>
);

export default Books;

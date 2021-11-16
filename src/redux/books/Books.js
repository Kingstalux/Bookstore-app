import React from 'react';

const Books = () => (
  <div>
    <div className="book-list" />
    <br />
    <form>
      <h2>ADD NEW BOOK</h2>
      <input placeholder="Book title" />
      <br />
      <input placeholder="Category" />
      <br />
      <button type="submit">Add Book</button>
    </form>
  </div>
);

export default Books;

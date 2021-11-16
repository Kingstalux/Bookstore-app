import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook, removeBook } from '../redux/books/book';

export default function Books() {
  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title: document.querySelector('.title').value,
      author: document.querySelector('.author').value,
    };
    document.querySelector('.title').value = '';
    document.querySelector('.author').value = '';
    dispatch(addBook(newBook));
  };

  const removeBookFromStore = (e) => {
    dispatch(removeBook(e.target.id));
  };

  const booksArray = useSelector((state) => state.booksReducer);
  const listItems = booksArray.map((book) => (
    <div key={book.id}>
      <p key={book.title}>{book.title}</p>
      <p key={book.author}>{book.author}</p>
      <button type="button" id={book.id} onClick={removeBookFromStore}>Remove Book</button>
    </div>
  ));

  return (
    <div>
      <div className="book-list">{listItems}</div>
      <br />
      <form>
        <h2>ADD NEW BOOK</h2>
        <input placeholder="Book title" className="title" />
        <br />
        <input placeholder="Book author" className="author" />
        <br />
        <button type="submit" onClick={submitBookToStore}>Add Book</button>
      </form>
    </div>
  );
}

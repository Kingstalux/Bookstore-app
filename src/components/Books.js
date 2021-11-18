import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { fetchBooks, deleteBooksApi } from '../redux/books/book';

export default function Books() {
  const dispatch = useDispatch();

  const ApiUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/j8JmvxHKftHERHKD19Nl/books/';

  const getItems = () => {
    dispatch(fetchBooks());
  };

  useEffect(() => {
    getItems();
  }, []);

  const submitBookToStore = (e) => {
    e.preventDefault();
    fetch(ApiUrl, {
      method: 'post',
      body: JSON.stringify({
        item_id: uuidv4(),
        title: document.querySelector('.title').value,
        category: document.querySelector('.author').value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.text())
      .then((json) => {
        if (json) {
          getItems();
        }
      });
    document.querySelector('.title').value = '';
    document.querySelector('.author').value = '';
  };

  const removeBookFromStore = (e) => {
    dispatch(deleteBooksApi(e.target.id));
  };

  const booksArray = useSelector((state) => state.booksReducer.books);
  const listItems = Object.keys(booksArray).map((book) => (
    <div key={book} className="card">
      <div className="list">
        <p className="action">Action</p>
        <p className="book-title">{booksArray[book][0].title}</p>
        <p className="book-author">{booksArray[book][0].category}</p>
        <div className="btn-div">
          <button type="button" className="comment btn">Comment</button>
          <button type="button" id={book} className="remove btn" onClick={removeBookFromStore}>Remove</button>
          <button type="button" className="edit btn">Edit</button>
        </div>
      </div>
      <div className="percentage">
        <p className="circle">ICON</p>
        <div className="middle">
          <p className="number">0%</p>
          <p className="completed">Completed</p>
        </div>
      </div>
      <div className="progress">
        <p className="current">CURRENT CHAPTER</p>
        <p className="chapter">Prologue</p>
        <button type="button" className="progress-btn">UPDATE PROGRESS</button>
      </div>
    </div>
  ));

  return (
    <div className="book-div">
      <div className="book-list">{listItems}</div>
      <br />
      <div className="hr"><hr /></div>
      <form className="form">
        <h2>ADD NEW BOOK</h2>
        <input placeholder="Book title" className="title" />
        <input placeholder="Category" className="author" />
        <button type="submit" onClick={submitBookToStore} className="add-btn">Add Book</button>
      </form>
    </div>
  );
}

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { fetchBooks } from '../redux/books/bookApi';

export default function Books() {
  const dispatch = useDispatch();

  const ApiUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/kx1umiDgY4OqWMAejDcI/books';

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

  //   const removeBookFromStore = (e) => {
  //     dispatch(removeBook(e.target.id));
  //   };

  const booksArray = useSelector((state) => state.booksReducer.books);
  const listItems = Object.keys(booksArray).map((book) => (
    <div key={book}>
      <p>{booksArray[book][0].title}</p>
      <p>{booksArray[book][0].category}</p>
      <button type="button" id={book}>Remove Book</button>
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
        <input placeholder="Category" className="author" />
        <br />
        <button type="submit" onClick={submitBookToStore}>Add Book</button>
      </form>
    </div>
  );
}
//  kx1umiDgY4OqWMAejDcI
//  j8JmvxHKftHERHKD19Nl
//  axkKiNTc0BlcvlvnQO6f
//  TfnISTIUlc2jqorlqZNb
//  SOEUq8Bu7DF5kK8jIXTi

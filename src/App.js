import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Books from './redux/books/Books';
import Categories from './redux/categories/Categories';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;

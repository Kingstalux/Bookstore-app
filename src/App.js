import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Books from './redux/books/Books';
import Categories from './redux/categories/Categories';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;

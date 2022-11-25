import './App.css';
import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Search from './Components/Search.js';

function App() {
  return (
    <div className="App">
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo center">Pixabay</a>
        </div>
			</nav>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

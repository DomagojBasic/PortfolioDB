import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import Home from './components/home/Home'
import Header from './components/header/Header'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Home />
        <Routes>

        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;

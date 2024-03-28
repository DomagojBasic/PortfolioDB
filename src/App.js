import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home'
import Header from './components/header/Header'
import Contact from './components/contact/contact';
import MyWork from './components/work/MyWork';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Home />
        <Routes>
        <Route path="/contact" component={Contact} />
        <Route path="/work" component={MyWork} />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}


export default App;

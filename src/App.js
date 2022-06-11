import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from './Header';
import Paintings from './Paintings';
import Home from './Home';
import './App.css';

function App() {
  console.log("hello")
  return (
    <>
    <Header />
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/paintings" element={<Paintings/>}/>
          </Routes>
      </BrowserRouter>
    </>
  );
}

//<Route path="/paintings">
           // <Header />
            //<Paintings />
        //  </Route>

export default App;

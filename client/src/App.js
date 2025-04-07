import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Member from './Member';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';


function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Member />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

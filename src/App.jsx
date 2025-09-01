import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';

import Menu from './menu';
import Contact from './Contact';
import Service from './Service';
import Help from './Help';
import Navbar from './Navbar';
import LoginPage from './Login';
import ProductList from './Fetch';
import Chatbot from './chatbot';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Navbar isLoggedIn={isLoggedIn} />
       <div style={{ paddingTop: '60px' }}>
     
      <Routes>
        {/* If logged in, redirect "/" to "/product" */}
        <Route
          path="/"
          element={
            isLoggedIn ? <Navigate to="/product" /> : <LoginPage setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/help" element={<Help />} />
        <Route path="/AI" element={<Chatbot/>} />
       

        {/* Protect product route: only accessible if logged in */}
        <Route
          path="/product"
          element={isLoggedIn ? <ProductList /> : <Navigate to="/" />}
        />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

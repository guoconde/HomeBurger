import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { GlobalStyles } from '@mui/material';
import Home from './pages/home';
import FirstPage from './pages/firstPage';
import { GlobalCss } from './assets/globalCss';
import ItemById from './pages/itemById';
import { CartProvider } from './context/cartContext';
import Cart from './pages/cart';
import UserInfo from './pages/userInfo';

function App() {
  return (
    <CartProvider>
      <CssBaseline />
      <GlobalStyles styles={GlobalCss} />
      <Router>
        <Routes>
          <Route path='/' element={<FirstPage />} />
          <Route path='/home' element={<Home />} />
          <Route path='/:path/:id' element={<ItemById />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/info' element={<UserInfo />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;

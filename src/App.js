import React from 'react';
import './App.css';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//imports propios
import NavBar from './components/navbar/navbar';
import ItemListContainer from './components/body/itemlistcontainer';
import ItemDetailContainer from './components/body/itemdetailcontainer';
import Cart from './components/body/cart';
import { CartProvider } from './contexts/cartcontext';

//THEME
const theme = createTheme({
  palette: {
    primary: {
      main: '#01baef'      
    },
    secondary: {
      main: '#F9F2E7'
    }
  }
});

//APP
function App() {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>        
        <div className="App">
          <CartProvider>
            <NavBar/>
            <Routes>
              <Route exact path="/" element={<ItemListContainer/>}/>     
              <Route path="/category/:id" element={<ItemListContainer/>}/>     
              <Route path="/item/:id" element={<ItemDetailContainer/>}/>  
              <Route path="/cart" element={<Cart/>}/>  
            </Routes>
          </CartProvider>
        </div>        
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
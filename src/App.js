import './App.css';
import NavBar from './components/navbar/navbar';
import ItemListContainer from './components/body/itemlistcontainer';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import ItemDetailContainer from './components/body/itemdetailcontainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

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

  const [item, setItem] = React.useState();

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>        
        <div className="App">
          <NavBar/>
          <Routes>
            <Route exact path="/" element={<ItemListContainer/>}/>     
            <Route path="/category/:id" element={<ItemListContainer/>}/>     
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>  
          </Routes>
        </div>        
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
import './App.css';
import NavBar from './components/navbar/navbar';
import ItemListContainer from './components/body/itemlistcontainer';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
          <NavBar/>
          <ItemListContainer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
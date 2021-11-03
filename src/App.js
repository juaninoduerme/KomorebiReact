import './App.css';
import NavBar from './components/navbar/navbar';
import ItemListContainer from './components/body/itemlistcontainer';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer/>
    </div>
  );
}

export default App;

import { Header } from './components/Header/Header';
import { Search } from './components/Search/Search';
import Main from './components/Main/Main';
import AddLot from "./components/AddLot/AddLot"
import {Routes, Route} from "react-router-dom"
import "./scss/index.scss"
import axios from 'axios';

// npm run dev


function App() {
  return (
    <div className="App">
        <Header />
        <Search />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/add_lot' element={<AddLot />} />
        </Routes>
    </div>  
  );
}


export default App;

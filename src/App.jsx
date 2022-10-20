import React from 'react';
import { Header } from './components/Header/Header';
import { Search } from './components/Search/Search';
import "./scss/index.scss"
import axios from 'axios';

// npm run dev


function App() {
  // let post = axios.post('http://localhost:3001/avto', {
  //   "id": 3,
  //   "name": "Audi A4",
  //   "price": 7000,
  //   "description": "description of lot",
  //   "contact": [
  //     "0990000000",
  //     "0500000000"
  //   ]})
  //     .then(prom => console.log(JSON.parse(prom)))
  // post()
  return (
    <div className="App">
        <Header />
        <Search />
    </div>  
  );
}


export default App;

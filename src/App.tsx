import React from 'react';
import { Header } from './components/Header/Header';
import { Search } from './components/Search/Search';
import "./scss/index.scss"
// npm run dev


function App() {
  return (
    <div className="App">
        <Header />
        <Search />
    </div>  
  );
}


export default App;

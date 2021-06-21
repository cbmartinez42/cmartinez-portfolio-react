import React, {useState} from 'react';

import './App.css';
import Header from './Components/Header/Header.js'
import About from './pages/about';
import Home from './pages/home';
import Contact from './pages/contact';
import Work from './pages/work';

function App() {
  const [pages] = useState([<Home />, <About />, <Contact />, <Work />]);
  const [page, setPage] = useState(pages[0]); 

  return (
    <>
    <Header 
      setPage = {setPage}
      pages = {pages}
    />
    {page}
    </>
  );
}

export default App;

import React, {useState} from 'react';
import './App.css';
import About from './pages/about';
import Home from './pages/home';
import Contact from './pages/contact';
import Work from './pages/work';
import PersistentDrawerRight from "./Components/PersistantDrawerRight/PersistantDrawerRight"
import Dice from "./Components/Dice/Dice"

function App() {
  const [pages] = useState([<Home />, <About />, <Work />, <Contact />]);
  const [page, setPage] = useState(pages[0]); 

  return (
    <>
    <PersistentDrawerRight
      setPage = {setPage}
      pages = {pages}
    />
    {page}
    <Dice />
    </>
    // <Router>
    //   <PersistentDrawerRight />
    //   <Route exact path="/" component={Home} />
    //   <Route exact path="/about" component={About} />
    //   <Route exact path="/work" component={Work} />
    //   <Route exact path="/contact" component={Contact} />
    // </Router>
  );
}

export default App;

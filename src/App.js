import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Ticket from './pages/Ticket';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element = {<Home />}/>
          <Route path="/ticket" element = {<Ticket />}/>
          <Route path="/about" element = {<About />}/>
          <Route path="/contact" element = {<Contact />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

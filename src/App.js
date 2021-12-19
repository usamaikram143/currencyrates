import React from 'react';
import Currency_convertor from './components/Currency_convertor';
import Home from './components/Home';
import Forex from './components/Forex';
import Header from './components/Header';
import Crypto from './components/Crypto';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    
    <Router>

      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/currency_converter" element={<Currency_convertor/>}/>
        <Route path="/forex" element={<Forex/>}/>
        <Route path="/crypto" element={<Crypto/>}/>
        

      </Routes>

    </Router>
   
  );
}

export default App;
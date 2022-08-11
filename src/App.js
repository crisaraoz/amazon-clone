import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Checkout from './Checkout';
import { Fragment } from 'react';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={
            <Fragment>
              <Header />
              <Home />
            </Fragment>
          } />
          <Route path="/checkout" element={
            <Fragment>
              <Header />
              <Checkout />
            </Fragment>
          } />

        </Routes>
      </Router> 
      
    </div>
  );
}

export default App;

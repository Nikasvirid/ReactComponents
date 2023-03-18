/* eslint-disable prettier/prettier */
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import React, { Component } from "react";
import  Home  from './Home';
// eslint-disable-next-line import/no-named-as-default
import  About  from './About';
import  Shop from './Shop';
import  Error404 from './Error404';
import './App.css';
import SearchBar from "./SearchBar";

class App extends Component {
  render() {
    return (<Router>
      <nav>
        
        <Link to ='/Home' className="link"> Home</Link>
        <Link to='/About'className="link"> About Us </Link>
        <Link to='/Shop'className="link"> Shop</Link>
        
      </nav>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About />}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="*" element={<Error404/>}/>
      </Routes>
    </Router>
    );
  }
}

export default App;

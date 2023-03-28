import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Component } from "react";
import Home from "./Home";
import About from "./About";
import Shop from "./Shop";
import Form from "./Forms/Form";
import Error404 from "./Error404";
import Header from "./Header";

class App extends Component {
  render() {
    return (
    <div>
      <Header />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/form" element={<Form />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
    );
  }
}

export default App;

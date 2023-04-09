import React, { Component } from "react";
import CardList from "./CardList";
import Appi from "./SearchAPI";

class Blog extends Component {
  render() {
    return (
      <div>
        <Appi />
        <h2 className="shoping"> Go! </h2>
        <CardList />
      </div>
    );
  }
}
export default Blog;

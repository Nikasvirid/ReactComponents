import React, { Component } from "react";
import SearchBar from "./SearchBar";
import CardList from "./CardList";

class Blog extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <h2 className="shoping"> Go! </h2>
        <CardList />
      </div>
    );
  }
}
export default Blog;

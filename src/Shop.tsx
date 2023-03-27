import React from "react";
import SearchBar from "./SearchBar";
import CardList from "./CardList";

class Blog extends React.PureComponent {
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

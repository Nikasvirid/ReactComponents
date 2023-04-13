import { Component } from "react";
import CardList from "./CardList";
import SearchBar from "./SearchBar";

class Blog extends Component {
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

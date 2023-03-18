import React, { Component } from "react";
import SearchBar from "./SearchBar";
import CardList from "./CardList";
import { CardProd } from "./CardData";

class Blog extends Component  {
  render(){
    return (
      <div>
        <SearchBar />
        <h2 className="shoping"> Go! </h2>
         <CardList id={0} name={""} price={""} searchTerm={""} image={""}/>
      </div>
    );
  }
}
export default Blog;
import React from "react";
import { Link } from "react-router-dom";

export default class Header extends React.PureComponent {
  render() {
    return (
      <>
        <Link to="/Home" className="link" />
        Home
        <Link to="/About" className="link">
          {" "}
          About Us{" "}
        </Link>
        <Link to="/Shop" className="link" />
        {this.props}
        Shop
        <Link to="/Form" className="link" />
        Form
      </>
    );
  }
}

import { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
    render() {
        return(<div>
          <nav>
            <Link to ='/Home' className="link"> Home</Link>
            <Link to='/About'className="link"> About Us </Link>
            <Link to='/Shop'className="link"> Shop</Link>
            <Link to='/Form' className="link">Form</Link>
          </nav>
        </div>

        );
    }
};
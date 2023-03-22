import { Component } from "react";
import React from "react";
type InputKey = {
    input: string;
};
type InputValue = {
    name: string;
}

class Iinput extends Component {
    constructor (props: InputValue){
        super(props);
        this.state = {input:''};
    };

    render() {
       return (<div>
        <label>First name
        <input type="text"/>
        </label>
        <label>Last name</label>
        <input type="text"/>
        </div>
       ) ;
    }
}
export default Iinput;
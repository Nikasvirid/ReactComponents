import React, { Component } from "react";

type InputSt = {
  input: string;
};
type InputPro = {
  name: string;
};

class Iinput extends Component<InputPro, InputSt> {
  constructor(props: InputPro) {
    super(props);
    this.state = { input: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    this.setState({ input: e.target.value });
    //console.log(e.target.value);
  };

  render() {
    return (
      <label htmlFor="labell">
        {this.props.name}
        <input
          type="text"
          value={this.state.input}
          onChange={this.handleChange}
        />
      </label>
    );
  }
}
export default Iinput;

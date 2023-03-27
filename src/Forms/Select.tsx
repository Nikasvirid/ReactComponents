import { Component } from "react";

type SelectSt = {
  value: string;
};

type SelectPro = {
  name: string;
  options: string[];
};

class Select extends Component<SelectPro, SelectSt> {
  constructor(props: SelectPro) {
    super(props);
    this.state = { value: "pupsikTiMoy" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <label htmlFor="labell">
        {this.props.name}
        <select value={this.state.value} onChange={this.handleChange}>
          {this.props.options.map((option) => {
            return (
              <option value={option} key={option}>
                {option}
              </option>
            );
          })}
        </select>
      </label>
    );
  }
}
export default Select;

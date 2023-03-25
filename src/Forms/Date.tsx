import { Component } from "react";

type DateSt = {
    input: string;
};

type DatePro = {
    name: string;
};

class Date extends Component <DatePro, DateSt>{
    constructor(props: DatePro) {
        super(props);
        this.state = {input:''};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        this.setState({input: e.target.value});
    };
    render() {
        return(
          <label className="labell">
            {this.props.name}
            <input type="date"value ={this.state.input}onChange={this.handleChange} />
          </label>  
        );
    }
}
export default Date;
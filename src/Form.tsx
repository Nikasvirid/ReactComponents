//import { Component, JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal } from "react";\
import Iinput from "./Iinput";
import { Component } from "react";
import Select from "./Select";
class Form extends Component {
  
    render() {
      return(<form onSubmit={this.handleSubmit}>
        <div className="form">
          <h2> Fill in the form data!</h2>
          <Iinput />
          <br />
          What's your gender:
          <select>
            <option value="M">Masculine</option>
			      <option value="F">Female</option>
			      <option value="N">Neuter</option>
		      </select>
          <br />
           Select a date:
           <br/>
          <input type="date" id="caledar" value={"dd.MM.yyyy"}/>
          <label>
          Agree: <input type="checkbox" name="myCheckbox" defaultChecked={true} />
          </label><br/>
          Your experience: 
          <label>
          <input type="radio" name="myRadio" value="junior" />
          Junior
        </label>
        <label>
          <input
            type="radio"
            name="myRadio"
            value="middle"
            defaultChecked={true} 
          />
          Middle
        </label>
        <label>
          <input type="radio" name="myRadio" value="senior" />
          Senior
        </label>
        
        <button type="submit">Submit</button>
        <hr/>
        </div>
        </form> 
        
      );
    }
  };
  export default Form;
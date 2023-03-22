//import { Component, JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal } from "react";\
import Iinput from "./Iinput";
import { Component } from "react";
class Form extends Component {
  
    render() {
      return(<form>
        <div className="form">
          <h2> Fill in the form data!</h2>
          <p>
          <Iinput />
          
          </p>
          <p> What's your gender:</p>
          <select>
            
			<option value="M">Masculine</option>
			<option value="F">Female</option>
			<option value="N">Neuter</option>
		</select>
          <p>
         
          </p>
        </div>
        </form> 
      );
    }
  };
  export default Form;
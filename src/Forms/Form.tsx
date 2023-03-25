//import { Component, JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal } from "react";\
import Iinput from "./Iinput";
import { Component } from "react";
import Select from "./Select";
import { experience, gender } from "../data";
import Date from "./Date";
import Rradio from "./Rradio";
import Validation from "./Validation";



class Form extends Component {
 
    render() {
      return(<form>
          <div className="form">
          <h2> Fill in the form data!</h2>
          <Iinput  name="First name:"/>
          <Select name="What's your gender:" options={gender}/>
          <Date name="Date"/>
          Your experience:
          <Rradio experience={""}/>
          Agree:
          <input type="checkbox"/>
          Attach CV:
          <input type="file" />      
          Submited!<button type="submit"className="submit">Submit</button>
        
        </div>
        
        </form> 
        
      );
    }
  };
  export default Form;
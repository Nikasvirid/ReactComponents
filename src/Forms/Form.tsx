//import { Component, JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal } from "react";\
import Iinput from "../Forms/Iinput";
import { Component } from "react";
import Select from "../Forms/Select";
import { experience, gender } from "../data";
import Date from "../Forms/Date";
import Rradio from "../Forms/Rradio";
import Validation from "../Forms/Validation";



class Form extends Component {
 
    render() {
      return(<form >
        <div><h2> Form</h2></div>
           <div className="form">
           <h2> Fill in the form data!</h2>
          <Iinput  name="First name:"/>
          <Select name="What's your gender:" options={gender}/>
          <Date name="Date of completion:"/>
          <br/>
          Your experience:
          <Rradio experience={""}/>
          <br/>
          I accept the terms of the user agreement:
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
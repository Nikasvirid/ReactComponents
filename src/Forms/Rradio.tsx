import React from "react";

export interface Experience {
    experience: string;
};

 function Rradio (props: Experience):JSX.Element {
    return(<div>     
             <label>
               <input type ="radio" name="experience"value="junior" />
                Junior
             </label>
             <label>
               <input type ="radio" name="experience"value="middle'" />
                Middle
             </label>
             <label>
                <input type ="radio" name="experience"value="senior" />
                Senior
             </label>
           </div>
    )
};
export default Rradio;
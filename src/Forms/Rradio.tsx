import React from "react";

export interface Experience {
  experience: string;
}

function Rradio(): JSX.Element {
  return (
    <div>
      <label htmlFor="labell">
        <input type="radio" name="experience" value="junior" />
        Junior
      </label>
      <label htmlFor=" ">
        <input type="radio" name="experience" value="middle'" />
        Middle
      </label>
      <label htmlFor=" ">
        <input type="radio" name="experience" value="senior" />
        Senior
      </label>
    </div>
  );
}
export default Rradio;

import React, { useContext } from "react";
import RequestFormButton from './RequestFormButton'

export default function SubmitForm() {
  const divstyle = {
    display: "flex",
    textAlign:"center"

  }
  const formstyle = {
    display: "inline-block",
    width:"100%",
    textAlign:"center"
  }

  return (
    <div style={divstyle}>
      <form style={formstyle}>
        <label>
          Name of Comick:
          <input type="text" style={{marginRight:"4em"}}/>
        </label>
        <label>
          Year of Release:
          <input type="text" style={{marginRight:"4em"}}/>
        </label>
        <label>
          Your Email:
          <input type="text" style={{marginRight:"4em"}}/>
        </label>

        <RequestFormButton />
      
      </form> 
    </div>
  );
}

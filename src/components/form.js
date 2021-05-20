import React, { useState } from "react";
import Signup from "./signup";
import Signupsuccess from "./signupsuccess";

const Form = () => {
    const [formSubmitted,setFormSubmitted]=useState(false);
  
  const submitForm =()=>{
      setFormSubmitted(true);
  }
    return (
    <div>
 {!formSubmitted ? <Signup submitForm={submitForm} /> : <Signupsuccess/> }
    </div>
  );
};

export default Form;

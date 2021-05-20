import React, { useEffect, useState } from "react";
import Validation from "./validation";

const Signup = ({submitForm}) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [dataisCorrect,setDataisCorrect]=useState(false);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

const[errors, setErrors]= useState({});

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    setDataisCorrect(true);
  };

useEffect(() =>{
    if(Object.keys(errors).length === 0 && dataisCorrect){
        submitForm(true);
    }
})

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <h2 className="title"> Login Form</h2>
        </div>
        <form className="form-wrapper">
          <div className="email">
            <div className="label">Email</div>
            <input
              className="input"
              type="text"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p> }
          </div>
          <div className="password">
            <div className="label">Password</div>
            <input
              className="input"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
              {errors.password && <p className="error">{errors.password}</p> }
          </div>
          <div>
            <button className="submit" onClick={handleFormSubmit}>
              {" "}
              Login
            </button>
          </div>
          <hr />
          <div>
            <button className="submit" onClick={handleFormSubmit}>
              Sign-Up{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

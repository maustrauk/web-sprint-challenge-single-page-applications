import React, {useState, useEffect} from "react";
import {Route} from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';

import Home from "./Home";
import Form from "./Form";

import schema from "../validation/shema";


const initialFormValues = {
  name: "",
  size: "",
  pepperoni: false,
  onions: false,
  pineapple: false,
  sausage: false,
  spec: "",
}

const initialFormErrors ={
  name: "",
  size: "",
}

const initialDisabled = true;

const initialOrder ={
  name: "",
  size: "",
  pepperoni: false,
  onions: false,
  pineapple: false,
  sausage: false,
  spec: "",
};

const post_URL = "https://reqres.in/api/users";

const App = () => {

  const [formValues, setFormValues] = useState(initialFormValues); 
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [order, setOrder] = useState(initialOrder);

  const inputChange = (name, value) => {

    yup
    .reach(schema, name)
    .validate(value)
    .then(() => {
      setFormErrors({...formErrors, [name]: ""});
    })
    .catch(err => {
      setFormErrors({...formErrors, [name]: err.errors[0]})
    })

    setFormValues({...formValues, [name] : value});
  }

  const formSubmit = () => {

    axios
    .post(post_URL, formValues)
    .then(res => {
      console.log("Data:",res.data);
      setOrder( res.data);
    })
    .catch(err => {
      console.log("Error:",err);
    })

    setFormValues(initialFormValues);
  }

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  },[formValues])

  return (
    <div className="App">
      <Route exact path="/">
        <Home />
      </Route> 
      <Route path="/pizza">
        <Form change={inputChange} submit={formSubmit} disabled={disabled} values={formValues}  errors={formErrors} order={order}/>
      </Route> 
    </div>
  );
};
export default App;

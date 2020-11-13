import React from "react";

import Confirmation from "./Confirmation";

const Form = props => {

    const {values, errors, disabled, change, submit, order} = props;

    const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const correctValue = type === "checkbox" ? checked : value;
        change(name, correctValue);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

  return (
    <div className="form" onSubmit={onSubmit}>
      <h1>Builde Your Own Pizza</h1>
      <form>
          <label>
              Name:
              <input name="name"
                type="text"
                placeholder="Enter your name"
                value={values.name}
                onChange={onChange}/>
          </label>
          <div className="errors">{errors.name}</div>
          <label>Pizza Size :
                <select name = "size" value = {values.size} onChange = {onChange}>
                    <option value = "">-----</option>
                    <option value = "small">Small</option>
                    <option value = "large">Large</option>
                    <option value = "extra_large">Extra Large</option>
                </select>
            </label>
            <div className="errors">{errors.role}</div>
            <div>
                Toppings:
                <label>
                    Pepperoni
                    <input
                        name = "pepperoni"
                        type = "checkbox"
                        checked = {values.pepperoni}
                        onChange ={onChange}/>
                </label>
                <label>
                    Onions
                    <input
                        name = "onions"
                        type = "checkbox"
                        checked = {values.onions}
                        onChange ={onChange}/>
                </label>
                <label>
                    Pineapple
                    <input
                        name = "pineapple"
                        type = "checkbox"
                        checked = {values.pineapple}
                        onChange ={onChange}/>
                </label>
                <label>
                    Sausage
                    <input
                        name = "sausage"
                        type = "checkbox"
                        checked = {values.sausage}
                        onChange ={onChange}/>
                </label>
            </div>
            <label>
                Special instructions:
                <input name="spec"
                    type="text"
                    placeholder="Type Instructions"
                    value={values.spec}
                    onChange={onChange}/>
            </label>
            <div>
                <button disabled={disabled}>Add order</button>
            </div>
      </form>

      <Confirmation order={order} />
    </div>
  );
};
export default Form;

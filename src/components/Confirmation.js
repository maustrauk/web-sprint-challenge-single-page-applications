import React from "react";

const Confirmation = props => {
    const {order} = props;
    if (order.name==="") return (<div className="Confirmation"></div>);
  return (
    <div className="Confirmation">
    <p>Order for {order.name}</p>
    <p>Pizza size: {order.size}</p>
    <p>Toppings:</p>
    {order.pepperoni ? <p>pepperoni</p> : <div></div>}
    {order.onions ? <p>onions</p> : <div></div>}
    {order.pineapple ? <p>pineapple</p> : <div></div>}
    {order.sausage ? <p>sausage</p> : <div></div>}
    <p>Special instructions: {order.spec}</p>
    </div>
  );
};
export default Confirmation;

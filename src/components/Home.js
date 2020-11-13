import React from "react";
import {Link} from "react-router-dom";

const Home = props => {
  return (
    <div className="Home">
      <h1>Home</h1>
      <Link to="/pizza" className="linkComponent">
          <div>Pizza</div>
      </Link>
    </div>
  );
};
export default Home;

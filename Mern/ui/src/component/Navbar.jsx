import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{display : "flex" , justifyContent : "center" , alignItems : "center" } }>
      <ul style={{display : "flex" , gap : "60px"}}>
       <NavLink  to="/">Home</NavLink>
       <NavLink to="/about" >About</NavLink>
        <NavLink to="/admin">Admin</NavLink>
      </ul>
    </div>
  );
};

export default Navbar;

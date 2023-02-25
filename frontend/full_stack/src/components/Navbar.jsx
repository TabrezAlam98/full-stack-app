import React from "react";
import { Heading, Text, Box, Flex, Spacer } from "@chakra-ui/react";
// import Style from "./Navbar.module.css
import "./Navbar.css"
import { Link } from "react-router-dom";
import {FaBars} from 'react-icons/fa'
import {ImCross} from 'react-icons/im'

const Navbar = () => {
  const [mobile,setMobile]=React.useState(false)
  return (
    <nav className="navbar">
      <div className="container">
      <h1 className="logo">Logo</h1>
      <ul className={mobile?"nav_links_mobile":"nav_links"} onClick={()=>setMobile(false)}>
        <Link to="/">
          <li>Home</li>
        </Link>

        <Link to="/contact">
          <li>Contact</li>
        </Link>

        <Link to="/product">
          <li>Product</li>
        </Link>

        <Link to="login">
          <li>Login</li>
        </Link>

        <Link to="/signup">
          <li>Signup</li>
        </Link>
      </ul>
      <button className="mobile_menu_icons" onClick={()=>setMobile(!mobile)}>
        {mobile?<ImCross/>:<FaBars/>}
        
      </button>
      </div>
    </nav>
    
  );
};

export default Navbar;

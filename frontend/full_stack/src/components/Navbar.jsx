import React from "react";
import { Heading, Text, Box, Flex, Spacer } from "@chakra-ui/react";
import Style from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={Style.navbar}>
      <div className={Style.container}>
      <h1 className={Style.logo}>Logo</h1>
      <ul className={Style.nav_links}>
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
      </div>
    </nav>
    
  );
};

export default Navbar;

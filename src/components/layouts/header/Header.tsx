import React, {useState} from "react";
import classes from './Header.module.css';
import ShoppingCartButton from "../../ShoppingCart/ShoppingCartButton";
import { NavLink } from "react-router-dom";
import Button from "../../ui/button/Button";

interface IHeaderProps {
}

const Header: React.FC<IHeaderProps> = (props) => {

  const IsLoggedIn = true;

  return (
    <header className={classes.header}>
      <NavLink to="/" className={classes.logoCont}><h1 > Fashion Studio</h1></NavLink>
      {!IsLoggedIn &&
        <nav>
          <ul>
              <li><NavLink  to="/login" className={[classes.button, classes.navButton].join(" ")}>Login</NavLink></li>
              <li><NavLink to="/register" className={[classes.button, classes.navButton].join(" ")}>Register</NavLink></li>
          </ul>
        </nav>
      }
      {IsLoggedIn &&
        <div className={classes.rightContCont}>
          <ShoppingCartButton/>
	        <Button className={classes.button}>Logout</Button>
        </div>
      }
    </header>
  );
}

export default Header;
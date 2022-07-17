import classes from "./Input.module.css";
import React from "react";

interface IButtonProps {

}

const Input: React.FC<IButtonProps> = (props) => {
  return <input className={classes.input} {...props} />
}

export default Input;
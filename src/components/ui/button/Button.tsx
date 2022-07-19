import classes from "./Button.module.css";
import React, {MouseEventHandler} from "react";

interface IButtonProps {
  className?: string;
  children?: React.ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const Button: React.FC<IButtonProps> = (props) => {
  const {children, className, onClick} = props;
  return <button className={[classes.button, className].join(' ')} onClick={onClick}>{children}</button>
}

export default Button;

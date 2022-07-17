import classes from "./Button.module.css";
import React, {ReactElement} from "react";

interface IButtonProps {
  className?: string;
  children?: string | ReactElement
}

const Button: React.FC<IButtonProps> = (props) => {
  const {children, className} = props;
  return <button className={[classes.button, className].join(' ')}>{children}</button>
}

export default Button;
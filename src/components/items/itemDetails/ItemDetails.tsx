import React from "react";
import classes from "./ItemDetails.module.css";
import Button from "../../ui/button/Button";
import Input from "../../ui/input/Input";

interface IItemDetailsProps {
}

const ItemDetails : React.FC<IItemDetailsProps> = (props) => {

  return (
      <div className={classes.itemDetails}>
      </div>
  );

}

export default ItemDetails;
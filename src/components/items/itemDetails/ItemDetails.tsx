import React from "react";
import classes from "./ItemDetails.module.css";
import { ItemI } from "../../../store/items/itemsSlice";


const ItemDetails : React.FC<ItemI> = (props) => {
  const {name, description, price, img } = props;

  return (
      <div>
        <img src={img}/>
        <div className={classes.info}>
          <div>
            <div className={classes.title}>{name}</div>
            <div className={classes.description}>{description}</div>
          </div>
          <div className={classes.price}>${price}</div>
        </div>
      </div>
  );

}

export default ItemDetails;
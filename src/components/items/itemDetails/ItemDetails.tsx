import React from "react";
import classes from "./ItemDetails.module.css";
import { ItemI } from "../../../store/items/itemsSlice";
import {addToCartAction} from "../../../store/cart/cartSlice";
import { useAppDispatch } from '../../../hooks/hooks';


const ItemDetails : React.FC<ItemI> = (props) => {

  const dispatch = useAppDispatch();
  const {name, description, price, img , id } = props;

  const addToCart = (e: React.MouseEvent<HTMLElement> ) => {
    const id = e.currentTarget.dataset.id;
    if (id) {
      dispatch(addToCartAction(id));
    }
  }

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
        <button className={classes.addToCartBtn} onClick={addToCart} data-id={id}>Add to cart</button>
      </div>
  );

}

export default ItemDetails;
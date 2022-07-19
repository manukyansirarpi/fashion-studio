import {addToCartAction, removeFromCartAction, cartI} from "../../store/cart/cartSlice";
import {ItemI} from "../../store/items/itemsSlice";
import classes from "./ShoppingCartItem.module.css";
import React from "react";
import {useAppDispatch} from "../../hooks/hooks";

const ShoppingCartItem = (item: cartI & ItemI) => {
  const dispatch = useAppDispatch();

  const removeFromCart = (e: React.MouseEvent<HTMLElement> ) => {
    const id = e.currentTarget.dataset.id;
    if (id) {
      dispatch(removeFromCartAction(id));
    }
  }


  const addToCart = (e: React.MouseEvent<HTMLElement> ) => {
    const id = e.currentTarget.dataset.id;
    if (id) {
      dispatch(addToCartAction(id));
    }
  }

  return (
    <li className={classes['cart-item']} key={item.id}>
      <div>
        <h2>{item.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>$ {item.price}</span>
          <span className={classes.amount}>x {item.number}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button data-id={item.id} onClick={removeFromCart}>−</button>
        <button data-id={item.id} onClick={addToCart}>+</button>
      </div>
    </li>
  );
}

export default ShoppingCartItem;
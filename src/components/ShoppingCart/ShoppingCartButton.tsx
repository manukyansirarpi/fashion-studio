import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { data, fetchCartAsynch } from "../../store/cart/cartSlice"

import React, {Fragment, MouseEventHandler, useEffect, useState} from "react";

import ShoppingCart from "./ShoppingCart"
import ShoppingCartIcon from "./ShoppingCartIcon";
import classes from "./ShoppingCart.module.css";
import Button from "../ui/button/Button";

const ShoppingCartButton: React.FC = () => {

  const cartData = useAppSelector(data).data;
  const dispatch = useAppDispatch();

  const [showShoppingCart, setShowShoppingCart] = useState(false);

  const showShoppingCard = () => {
    setShowShoppingCart(true);
  }

  const hideShoppingCard = () => {
    setShowShoppingCart(false);
  }

  useEffect(()=> {
    dispatch(fetchCartAsynch())
  }, []);

  const cartItemsNumber = cartData.reduce((acc, current) => current.number + acc, 0);

	return (
	  <Fragment>
      <Button className={classes.button} onClick={showShoppingCard}>
        <Fragment>
        <span className={classes.icon}>
				  <ShoppingCartIcon/>
			  </span>
          <span className={classes.bump}>Shopping card</span>
          <span className={classes.badge}>{cartItemsNumber}</span>
        </Fragment>
      </Button>
      {showShoppingCart && <ShoppingCart hideShoppingCart={hideShoppingCard}/>}
    </Fragment>
	);
}

export default ShoppingCartButton;
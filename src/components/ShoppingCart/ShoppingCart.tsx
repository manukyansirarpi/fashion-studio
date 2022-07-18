import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { data, fetchCartAsynch } from "../../store/cart/cartSlice"

import React, {Fragment, useEffect} from "react";
import ShoppingCartIcon from "./ShoppingCartIcon";
import classes from "./ShoppingCart.module.css";
import Button from "../ui/button/Button";

const ShoppingCart: React.FC = () => {

  const cartData = useAppSelector(data).data;
  const dispatch = useAppDispatch();

  useEffect(()=> {
    dispatch(fetchCartAsynch())
  },[]);

  const cartItemsNumber = cartData.reduce((acc, current) => current.number + acc, 0);

	return (
		<Button className={classes.button}>
      <Fragment>
        <span className={classes.icon}>
				  <ShoppingCartIcon/>
			  </span>
        <span className={classes.bump}>Shopping card</span>
        <span className={classes.badge}>{cartItemsNumber}</span>
      </Fragment>
    </Button>
	);
}

export default ShoppingCart
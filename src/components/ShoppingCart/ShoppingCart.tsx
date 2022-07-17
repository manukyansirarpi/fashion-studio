import {Fragment} from "react";
import ShoppingCartIcon from "./ShoppingCartIcon";
import classes from "./ShoppingCart.module.css";
import Button from "../ui/button/Button";

const ShoppingCart = () => {

	return (
		<Button className={classes.button}>
      <Fragment>
        			<span className={classes.icon}>
				<ShoppingCartIcon/>
			</span>
        <span className={classes.bump}>Shopping card</span>
        <span className={classes.badge}>1</span>
      </Fragment>

	    </Button>
	);
}

export default ShoppingCart
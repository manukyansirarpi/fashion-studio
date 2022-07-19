import React from "react";
import Modal from "../modal/Modal";
import Card from "../ui/card/Card";

import {useAppSelector} from "../../hooks/hooks";
import {cartI, cart} from "../../store/cart/cartSlice";
import {ItemI, items } from "../../store/items/itemsSlice";
import ShoppingCartItem from "./ShoppingCartItem";

interface ShoppingCartProps {
  hideShoppingCart: () => void;
}

const ShoppingCart:React.FC<ShoppingCartProps> = (props) => {

  const { hideShoppingCart } = props;
  const cartData = useAppSelector(cart).data;
  let itemsData = useAppSelector(items).data;

  const cartItems = cartData.map(cartI => {
    return {...itemsData.filter(item => item.id == cartI.id)[0] as ItemI & cartI, number: cartI.number};
  })

  return (
    <Modal hide={hideShoppingCart}>
      <Card>
        <ul>
          {cartItems.map(item => <ShoppingCartItem {...item}></ShoppingCartItem>)}
        </ul>
      </Card>
    </Modal>
    );
}

export default ShoppingCart;

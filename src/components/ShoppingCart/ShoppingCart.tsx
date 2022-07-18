import React, {Fragment} from "react";
import Modal from "../modal/Modal";
import Card from "../ui/card/Card";

interface ShoppingCartProps {
  hideShoppingCart: () => void;
}

const ShoppingCart:React.FC<ShoppingCartProps> = (props) => {

  const { hideShoppingCart } = props

  return (
    <Modal hide={hideShoppingCart}>
      <Card>
        I am div modal shopping cxart
      </Card>
    </Modal>
    );
}

export default ShoppingCart;

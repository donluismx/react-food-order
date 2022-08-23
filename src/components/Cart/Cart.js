import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

import classes from './Cart.module.css';

const Cart = props => {
  const cartCtx = useContext(CartContext);
  return (
    <>
      <div className={classes["cart-items"]}>
        {cartCtx.meals.map((meal) => (
          <CartItem meal={meal} />
        ))}
      </div>
      <div className={classes.total}>
        {cartCtx.amount}
        <div className={classes.actions}>
          <button>Order</button>
          <button onClick={props.onConfirm}>Close</button>
        </div>
      </div>

    </>
  );
}
 
export default Cart;
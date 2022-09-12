import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

import classes from './Cart.module.css';

const Cart = props => {
  const cartCtx = useContext(CartContext);
  const cartAmount = cartCtx.amount.toFixed(2)

  const addMealHandler = (meal) => {
    cartCtx.onAddMeal({
      ...meal,
      quantity: 1
    });
  }
  const removeMealHandler = (id) => {
    cartCtx.onRemoveMeal(id);
  }

  return (
    <>
      <div className={classes["cart-items"]}>
        {cartCtx.meals.map((meal) => (
          <CartItem key={meal.id} meal={meal} onAddMeal={addMealHandler} onRemoveMeal={removeMealHandler}/>
        ))}
      </div>
      <div className={classes.total}>
        {cartAmount}
        <div className={classes.actions}>
          <button>Order</button>
          <button onClick={props.onConfirm}>Close</button>
        </div>
      </div>

    </>
  );
}
 
export default Cart;
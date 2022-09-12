import classes from './CartItem.module.css';

const CartItem = props => {

  const addHandler = () => {
    props.onAddMeal(props.meal);
  }
  const removeHandler = () => {
    props.onRemoveMeal(props.meal.id);
  }

  return (
    <div className={classes['cart-item']}>
      <h2>{props.meal.name}</h2>
      <div className={classes.summary}>
        <div className={classes.price}>{props.meal.price}</div>
        <div className={classes.amount}>{props.meal.quantity}</div>
      </div>
      <div className={classes.actions}>
        <button onClick={addHandler}>+</button>
        <button onClick={removeHandler}>-</button>
      </div>
    </div>
  );
}
 
export default CartItem;
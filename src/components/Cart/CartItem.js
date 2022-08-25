import classes from './CartItem.module.css';

const CartItem = props => {
  return (
    <div className={classes['cart-item']}>
      <h2>{props.meal.name}</h2>
      <div className={classes.summary}>
        <div className={classes.price}>{props.meal.price}</div>
        <div className={classes.amount}>{props.meal.quantity}</div>
      </div>
      <div className={classes.actions}>
        <button>+</button>
        <button>-</button>
      </div>
    </div>
  );
}
 
export default CartItem;
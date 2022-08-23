import { useState, useContext } from 'react';
import Cart from '../Cart/Cart';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';

import classes from './HeaderCartButton.module.css';


const HeaderCartButton = props => {
  const cartCtx = useContext(CartContext);
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const showCartHandler = () => {
    setCartIsVisible(true);
  }

  const hideCartHandler = () => {
    setCartIsVisible(false);
  }

  return ( 
    <>
      <div className={classes.button} onClick={showCartHandler}>
        <div className={classes.icon}>
        Cart
        </div>
        <div className={classes.badge}>{cartCtx.totalQuantity}</div>
      </div>
      {cartIsVisible && 
      <Modal>
        <Cart onConfirm={hideCartHandler}></Cart>
      </Modal>}
      
    </>
   );
}
 
export default HeaderCartButton;
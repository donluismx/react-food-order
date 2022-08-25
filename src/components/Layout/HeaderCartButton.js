import { useState, useContext, useEffect } from 'react';
import Cart from '../Cart/Cart';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';

import styles from './HeaderCartButton.module.css';


const HeaderCartButton = props => {
  const cartCtx = useContext(CartContext);
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const [cartHasChanged, setCartHasChanged] = useState(false);

  const { meals } = cartCtx;

  useEffect(() => {
    if(meals.length === 0){
      return;
    }

    setCartHasChanged(true);

    const timer = setTimeout(() => {
      setCartHasChanged(false);
    },500);

    return () => {
      clearTimeout(timer);
    }
      
  },[meals]);

  const showCartHandler = () => {
    setCartIsVisible(true);
  }

  const hideCartHandler = () => {
    setCartIsVisible(false);
  }

  const classes = cartHasChanged && styles.bump;

  return ( 
    <>
      <div className={styles.button} onClick={showCartHandler}>
        <div className={styles.icon}>
        Cart
        </div>
        <div className={`${classes} ${styles.badge}`}>{cartCtx.totalQuantity}</div>
      </div>
      {cartIsVisible && 
      <div>
      <Modal onConfirm={hideCartHandler}>
        <Cart onConfirm={hideCartHandler}></Cart>
      </Modal>
      </div>}
      
    </>
   );
}
 
export default HeaderCartButton;
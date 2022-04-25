import React,{Fragment} from 'react';

import meals from '../../meals.jpg';
import HeaderCartButton from '../HeaderCartButton/HeaderCartButton';
import styles from './Header.module.css';
const Header = () => {
  return ( 
    <>
    <div className={styles.header}>
      <h3>ReactMeals</h3>
      <HeaderCartButton />
    </div>
    <div className={styles['main-image']}>
      <img alt="meals" src={meals} />
    </div>
    </>
   );
}
 
export default Header;
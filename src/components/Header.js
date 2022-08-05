import React, { Fragment } from 'react';

import styles from './Header.module.css';
import HeaderImage from '../assets/meals.jpg';

const Header = () => {
  return ( 
    <Fragment>
      <div className={styles.header}>
        <p>Header</p>
      </div>
      <div className={styles["main-image"]}>
        <img src={HeaderImage} alt="" />
      </div>
    </Fragment>
  );
}
 
export default Header;
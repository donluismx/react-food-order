import styles from './Header.module.css';
import HeaderImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = () => {
  return ( 
    <>
      <div className={styles.header}>
        <p>Header</p>
        <HeaderCartButton />
      </div>
      <div className={styles["main-image"]}>
        <img src={HeaderImage} alt="" />
      </div>
    </>
  );
}
 
export default Header;
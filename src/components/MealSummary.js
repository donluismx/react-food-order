import React from 'react';

import Card from '../components/UI/Card';
import styles from './MealSummary.module.css';

const MealSummary = () => {
  return (
  <div>
    <Card className={styles.summary}>
      <h2>Delicious Food, Delivered To you</h2>
      <p>Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunchr or dinner at home.</p>
      <p>All our meals are cooked with hight-quality ingredients, just-in-time and of course by experienced chefs!</p>
    </Card>
  </div>
  );
}
 
export default MealSummary;
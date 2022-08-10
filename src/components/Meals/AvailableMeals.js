import React from 'react';

import MealItem from '../MealItem/MealItem';

import styles from './AvailableMeals.module.css';
import Card from '../UI/Card';

const AvailableMeals = (props)  => {
  const mealsAvailable = [
  {
    id: 'i4x2kb',
    name: 'Shnitzel',
    description: 'A german specialty!',
    price: 2.33
  },
  {
    id: 'oWpob82',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 5.66
  },
  {
    id: 'aju2B3',
    name: 'Barbecue Burger',
    description: 'Americans favourite',
    price: 6.88
  },
  {
    id: 'aubl2T',
    name: 'Pizza',
    description: 'Best choice ever',
    price: 15.88
  },
];

  return ( 
    <div className={styles.meals}>
      <Card>
        <ul>
        {mealsAvailable.map((meal) => (
          <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price} />
        )
        )}
        </ul>
      </Card>
    </div>
   );
}
 
export default AvailableMeals;
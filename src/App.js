import { Fragment } from 'react';

import Header from './components/Header/Header';
import styles from './App.module.css';
import './App.css';
import Card from './components/UI/Card';
import MealSummary from './components/Meals/MealSummary/MealSummary';

function App() {
  return (
    <>
    <body className={styles.body}>
      <div className={styles.container}>
        <Header />
        <Card className={`welcome-message ${styles.dark}`}>
          <h3>Delicious Food, Delivered To You</h3>
          <p>Choose your favourite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.</p>
          <p>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs</p>
        </Card>
        <Card>
          <MealSummary />
        </Card>
      </div>
    </body>
    </>
  );
}

export default App;

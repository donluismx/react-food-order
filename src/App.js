import {Fragment} from 'react';
import MealSummary from './components/MealSummary';

import './App.css';
import Header from './components/Header';
import AvailableMeals from './components/Meals/AvailableMeals';

function App() {
  return (
    <Fragment>
      <Header />
      <MealSummary />
      <AvailableMeals />
    </Fragment>
  );
}

export default App;

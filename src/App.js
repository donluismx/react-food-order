import {Fragment} from 'react';
import MealSummary from './components/MealSummary';

import './App.css';
import Header from './components/Layout/Header';
import AvailableMeals from './components/Meals/AvailableMeals';
import CartProvider from './store/CartProvider';

function App() {
  return (
    <CartProvider>
      <Header />
      <MealSummary />
      <AvailableMeals />
    </CartProvider>
  );
}

export default App;

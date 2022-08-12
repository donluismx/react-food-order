import React from 'react';

const CartContext = React.createContext({
  meals: [],
  amount: 0,
  onAddMeal: () => {},
  onRemoveMeal: () => {}
});
 
export default CartContext;

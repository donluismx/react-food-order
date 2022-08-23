import React from 'react';

const CartContext = React.createContext({
  meals: [],
  amount: 0,
  totalQuantity: 0,
  onAddMeal: (meal) => {},
  onRemoveMeal: (id) => {}
});
 
export default CartContext;

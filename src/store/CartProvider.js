import React, { useReducer } from 'react';

import CartContext from './cart-context';

const defaultCartState = {
  meals: [],
  amount: 0
};

const calculateCart = (meals) => {
  const cartAmount = meals.reduce((curAmount, meal) => {
    return curAmount + meal.price;
  },0);
  return cartAmount;
};

const cartReducer = (state, action) => {
  
  let cartMeals = [...state.meals];
  let cartAmount = state.amount;

  const existingMealIndex = cartMeals.findIndex((meal) => 
    meal.id  = action.meal.id
  );

  if(action.type === 'ADD'){

    if ( existingMealIndex !== -1 ){
      console.log("Adding a Meal that exists ");

      let sumQuantities = parseInt(cartMeals[existingMealIndex].quantity) + parseInt(action.meal.quantity);
      cartMeals[existingMealIndex].quantity = sumQuantities;
    }
    else{
      console.log("Adding a Meal that does NOT exists");
      cartMeals = cartMeals.concat(action.meal);
    }
  }
  if(action.type === 'REMOVE'){
    if ( existingMealIndex !== -1 ){
      console.log("Removing a Meal that exists");
    }
    else{
      console.log("Removing a Meal that does NOT exists");
    }
  }

  return { meals: cartMeals, amount: cartAmount }
};

const CartProvider = (props) => {
  // props.meal - { id: 'kial4', name: 'Hamburguer', price: 3.22, quantity: 3 }
  const [mealsState, dispatchMeal] = useReducer(cartReducer, defaultCartState);

  const addMealHandler = (meal) => {
    dispatchMeal({
      type: 'ADD',
      meal: meal
    });
  };

  const removeMealHandler = (id) => {
    dispatchMeal({
      type: 'SUBSTRACT',
      id: id
    });
  };

  return (
    <CartContext.Provider
      value= {{
        meals: mealsState.meals,
        amount: mealsState.amount,
        onAddMeal: addMealHandler,
        onRemoveMeal: removeMealHandler
      }}
    >
      {props.children}
    </CartContext.Provider>
  );


};

export default CartProvider;
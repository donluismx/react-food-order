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
  // console.log(action.meal);
  /* state[ ... , {id: 'kial4', name: 'Hamburguer', price: 3.22, quantity: 3} ] */
  
  const existingMealIndex = state.meals.findIndex((meal) => 
    meal.id  = action.meal.id
  );

  console.log("Index found:" + existingMealIndex);

  let cartMeals = [...state.meals];
  let cartAmount = state.amount;
  // console.log(state.meals);

  if(action.type === 'ADD'){

    if ( existingMealIndex !== -1 ){
      console.log("Adding a Meal that exists ");

      const sumQuantities = cartMeals[existingMealIndex].quantity + action.meal.quantity
      console.log(typeof(cartMeals[existingMealIndex].quantity))
      console.log(typeof(action.meal.quantity))
      
      cartMeals[existingMealIndex].quantity = cartMeals[existingMealIndex].quantity + action.meal.quantity;

      console.log("Adding " + cartMeals[existingMealIndex].quantity + " + " + action.meal.quantity + ' = ' + sumQuantities + ' , ' + cartMeals[existingMealIndex].quantity)
      cartAmount = calculateCart(cartMeals);
    }
    else{
      console.log("Adding a Meal that does NOT exists");
      // cartMeals.push = action.meal;
      cartMeals = cartMeals.concat(action.meal);
      cartAmount = calculateCart(cartMeals);

       // const mealTotalPrice = action.meal.price * action.meal.quantity;
      // console.log("meal.price * meal. quantity = mealTotalPrice" + action.meal.price + " * " + action.meal.quantity + " = " + mealTotalPrice);
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

  const logObj = (meals,amount) => {
    console.log("dump")
    console.log(meals)
    console.log(amount)
  }
  logObj(cartMeals, cartAmount)
  return { meals: cartMeals, amount: cartAmount }
};

const CartProvider = (props) => {
  // props.meal - {id: 'kial4', name: 'Hamburguer', price: 3.22, quantity: 3}

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
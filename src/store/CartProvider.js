import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  meals: [],
  amount: 0,
  totalQuantity: 0
};

const calculateCart = (meals) => {
  const cartAmount = meals.reduce((curAmount, meal) => {
    return curAmount + meal.price * meal.quantity;
  },0);
  const totalQuantity = meals.reduce((curAmount, meal) => {
    return curAmount + meal.quantity;
  },0);
  const cartTotals = {
    amount: cartAmount,
    totalQuantity: totalQuantity
  }
  return cartTotals;
};

const cartReducer = (state, action) => {
  
  const existingMealIndex = state.meals.findIndex((meal) => meal.id === action.meal.id );
  const existingMeal = state.meals[existingMealIndex];

  let updatedMeals;

  if(action.type === 'ADD'){

    if ( existingMeal ){
      console.log("Adding a Meal that exists ");

      const updatedMeal = {
        ...existingMeal,
        quantity: existingMeal.quantity + action.meal.quantity
      }

      updatedMeals = [...state.meals];
      updatedMeals[existingMealIndex] = updatedMeal;

    }
    else{
      console.log("Adding a Meal that doe/s NOT exists");
      updatedMeals = state.meals.concat(action.meal);
    }
  }
  if(action.type === 'REMOVE'){
    if ( existingMeal ){
      console.log("Removing a Meal that exists");
      
    }
    else{
      console.log("Removing a Meal that does NOT exists");
    }
  }
  const cartTotal = calculateCart(updatedMeals);

  console.log(updatedMeals);
  console.log(cartTotal);
  return { meals: updatedMeals, amount: cartTotal.amount, totalQuantity: cartTotal.totalQuantity }
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
        totalQuantity: mealsState.totalQuantity,
        onAddMeal: addMealHandler,
        onRemoveMeal: removeMealHandler
      }}
    >
      {props.children}
    </CartContext.Provider>
  );


};

export default CartProvider;
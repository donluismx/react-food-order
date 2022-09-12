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
  const id = (action.type === 'ADD' ? action.meal.id : action.id);
  const existingMealIndex = state.meals.findIndex((meal) => meal.id === id );
  const existingMeal = state.meals[existingMealIndex];

  console.log(existingMealIndex);
  
  let updatedMeals;

  if(action.type === 'ADD'){
    //The meal exists and we check wether to increment it's quantity or add it to the cart
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
      console.log("Adding a Meal that does NOT exists");
      updatedMeals = state.meals.concat(action.meal);
    }
  }
  if(action.type === 'SUBSTRACT'){
    updatedMeals = [...state.meals];
    if ( existingMeal ){
      console.log("Removing a Meal that exists");
      // The meal to remove exists and we need to check how many items the cart has of that meal
      if (existingMeal.quantity > 1){
        const updatedMeal = {
          ...existingMeal,
          quantity: existingMeal.quantity -1
        }
        updatedMeals[existingMealIndex] = updatedMeal;
      }
      else{
        updatedMeals = state.meals.filter(meal => meal.id !== existingMeal.id);
      }
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
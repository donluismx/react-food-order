import React, { useRef, useContext } from "react";

import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/cart-context";

const Meal = (props) => {
  const cartCtx = useContext(CartContext);
  const inputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const submittedMeal = {
      id: props.id,
      name: props.name,
      description: props.description,
      price: props.price,
      quantity: +inputRef.current.value
    };

    cartCtx.onAddMeal(submittedMeal);

    const enteredValue = inputRef.current.value;
    // console.log("Entered: " + enteredValue);
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{props.price}</div>
      </div>
      <MealItemForm
        id={props.id}
        ref={inputRef}
        onSubmit={submitHandler}
      />
    </li>
  );
};

export default Meal;

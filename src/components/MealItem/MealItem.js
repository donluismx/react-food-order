import React, { useState, useRef } from "react";

import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const Meal = (props) => {
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState("5");


  const submitHandler = (event) => {
    event.preventDefault();
    
    const enteredValue = inputRef.current.value;
    console.log("Entered: " + enteredValue);
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

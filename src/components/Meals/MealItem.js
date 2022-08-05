import React, { useRef } from "react";

import Card from "../UI/Card";
import Input from "../UI/Input";
import styles from "./MealItem.module.css";

const Meal = (props) => {
  const quantityInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredQuantity = quantityInputRef.current.value;
    console.log("Total " + enteredQuantity);
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{props.price}</div>
      </div>
      <form onSubmit={submitHandler}>
        <Input
          id={props.id}
          type="text"
          label="Amount"
          ref={quantityInputRef}
        />
        <button>+ Add</button>
      </form>
    </li>
  );
};

export default Meal;

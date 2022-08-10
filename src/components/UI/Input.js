import React, { useRef } from "react";

import styles from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type={props.type}
        max={props.max}
        min={props.min}
        step={props.step}
        ref={ref}
        defaultValue={props.defaultValue}
      ></input>
      {/* <input {...props.input}></input> */}
    </div>
  );
});

export default Input;

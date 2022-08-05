import React, { useRef } from "react";

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  return (
    <div className="input">
      <label htmlFor={props.id}>{props.label}</label>
      <input type={props.type} id={props.id} value={props.value} ref={inputRef}></input>
    </div>
  );
});

export default Input;

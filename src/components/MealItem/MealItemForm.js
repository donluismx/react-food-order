import React, { useRef } from 'react';

import Input from '../UI/Input';
import styles from './MealItemForm.module.css';

const MealItemForm = React.forwardRef((props, ref) => {
  //console.log("Props.value: " + props.value);
  // const defaultVal = !props.value ? +'1' : +props.value;
  // console.log('Default val:' + defaultVal + ' typeof: ' + typeof(defaultVal));
  return (
    <form className={styles.form} onSubmit={props.onSubmit}>
      <Input
        label = "Amount"
        id={'amount_' + props.id}
        type='number'
        max='10'
        min='1'
        step='1'
        ref={ref}
        defaultValue='1'

        // input={{
        //   id: 'amount_' + props.id,
        //   type: "number",
        //   min: '1',
        //   max:'10',
        //   step: '1',
        //   ref: ref,
        //   defaultValue: '1',
        //   onChange: props.onChange
        // }}
      />
      <button>+ Add</button>
    </form>
  );
});
 
export default MealItemForm;
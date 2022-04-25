
import styles from './Card.css';

function Card(props) {
  // const classes = "card " + props.className;
  const classes = `card ${props.className && props.className}`;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
import React, { useState } from "react";
import styles from "./Card.module.css";


const Card = (props) => {
  let [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked) 
  };
  
  const chekingInput = isChecked ? { textDecoration: "line-through", color: "#ddd" } : { textDecoration: "none", color: "var(--gray)" }

  return (
    <div className={styles.card} draggable="true" id={props.id}>
      {/* <div className={styles.dragIcon}>
        <Icon icon={arrowsMove} />
      </div> */}
      <input type="checkbox" checked={isChecked} onChange={handleCheck} />
      <span style={chekingInput}>{props.content}</span>
      <button
        className={styles.deleteBtn}
        onClick={() => {
          props.onDelete(props.id);
        }}
      >
        X
      </button>
    </div>
  );
};

export default Card;

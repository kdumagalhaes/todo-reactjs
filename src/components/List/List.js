import React from "react";
import styles from "./List.module.css";
import Card from "../Card/Card";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const List = (props) => {
  const todos = props.tasks.map((todo, index) => {
    return (
      <Card content={todo} key={index} id={index} onDelete={props.onDelete} />
    );
  });
  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.list}>{todos}</div>
    </DndProvider>
  );
};

export default List;

import React from "react";
import TodoItem from "./todoItems";
function Todos(props) {
  const styleTodo = {
    display: "flex",
    justifyContent:"flex-start",
    flexWrap:"wrap",
    fontWeight:"400",
  }

 
  return (
    <div style={styleTodo} className="container">
      {props.item.length === 0 ?"Start Adding Tasks":
        props.item.map((element) => {
          return <TodoItem todo={element} key={element.id} onDelete={props.onDelete} />
        })
      }
    </div>
  );
}
export default Todos;
import React from "react";

export default function TodoList() {
  let [list, setList] = React.useState([]);
  let [todo, setTodo] = React.useState("");

  return (
    <>
    <h1>Todo list</h1>
      <input
        type="text"
        onKeyDown={(event) => {
          if (event.key === "Enter") setList([...list, todo]);
        }}
        onInput={(event) => {
          setTodo(event.target.value);
        }}
      />
      <button onClick={() => setList([...list, todo])}>ok</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

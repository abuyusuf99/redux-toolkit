import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addTodo, remove, handleClick } from "./Features/todosReducer";

function Todos() {
  const todos = useSelector((state) => state.todos);

  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(addTodo(text));
    setText("");
  };

  const handleChange = (id) => {
    dispatch(handleClick(id));
  };

  return (
    <div>
      <form onSubmit={handleAdd}>
        <input
          onChange={(e) => setText(e.target.value)}
          value={text}
          type="text"
        />
        <button type="submit">Добавить</button>
      </form>
      <div>
        {todos.map((todo) => {
          return (
            <div
              style={{ textDecoration: todo.completed ? "line-through" : null }}
              key={todo.id}
            >
              <input type="checkbox" onClick={() => {handleChange(todo.id)}} />
              {todo.title}
              <button onClick={() => handleRemove(todo.id)}>-</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Todos;

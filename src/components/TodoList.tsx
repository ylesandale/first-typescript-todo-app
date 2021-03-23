import React from "react";
import classNames from "classnames";

import { ITodo } from "../interfaces";

interface TodoFormProps {
  todos: ITodo[];
  onRemove(id: number): void;
  onComlete(id: number): void;
}

const TodoList: React.FC<TodoFormProps> = ({ todos, onRemove, onComlete }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li
          className={classNames("todo", { completed: todo.completed })}
          key={todo.id}
        >
          <label>
            <input
              checked={todo.completed}
              type="checkbox"
              onChange={() => onComlete(todo.id)}
            />
            <span>{todo.title}</span>
            <i
              onClick={() => onRemove(todo.id)}
              className="material-icons red-text"
            >
              delete
            </i>
          </label>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

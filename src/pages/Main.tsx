import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { addTodo, removeTodo, completeTodo } from "../redux/actions/actions";

import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

import { ITodo, todoSelector } from "../interfaces";

const Main: React.FC = () => {
  const dispatch = useDispatch();
  const todos: ITodo[] = useSelector((state: todoSelector) => state.reducers);

  const onAddTodo: any = (title: string) => {
    dispatch(addTodo(title));
  };

  const onRemoveTodo: any = (id: number) => {
    dispatch(removeTodo(id));
  };

  const onCompleteTodo: any = (id: number) => {
    dispatch(completeTodo(id));
  };

  return (
    <>
      <TodoForm onAdd={onAddTodo} />
      <TodoList
        todos={todos}
        onRemove={onRemoveTodo}
        onComlete={onCompleteTodo}
      />
    </>
  );
};

export default Main;

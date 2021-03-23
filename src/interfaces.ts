export interface ITodo {
  title: string;
  id: number;
  completed: boolean;
}

export type AddTodo = { type: "ADD"; title: string };
export type RemoveTodo = { type: "REMOVE"; id: number };
export type CompleteTodo = { type: "COMPLETE"; id: number };

export type Actions = AddTodo | RemoveTodo | CompleteTodo;

export type todoSelector = { reducers: ITodo[] };

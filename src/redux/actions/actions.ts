export const addTodo: any = (title: string) => ({
  type: "ADD",
  title,
});

export const removeTodo: any = (id: number) => ({
  type: "REMOVE",
  id,
});

export const completeTodo: any = (id: number) => ({
  type: "COMPLETE",
  id,
});

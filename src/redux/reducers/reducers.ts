import { ITodo, Actions } from "../../interfaces";

const initialState: ITodo[] = [
  { id: 1, title: "Купить хлеб", completed: false },
  { id: 2, title: "Купить масло", completed: false },
];

const reducers = (state: ITodo[] = initialState, action: Actions): ITodo[] => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: state[state.length - 1].id + 1,
          title: action.title,
          completed: false,
        },
      ];

    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);

    case "COMPLETE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    default:
      return state;
  }
};

export default reducers;

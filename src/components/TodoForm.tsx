import React from "react";

interface TodoFormProps {
  onAdd(title: string): void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      if (ref.current!.value) {
        onAdd(ref.current!.value);
        ref.current!.value = "";
      } else {
        alert("Ошибка, введите название дела!");
      }
    }
  };

  const ref = React.useRef<HTMLInputElement>(null);
  console.log(ref.current?.value);
  return (
    <div className="input-field mt2">
      <input
        ref={ref}
        type="text"
        id="title"
        placeholder="Введите название дела"
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active">
        Введите название дела
      </label>
    </div>
  );
};

export default TodoForm;

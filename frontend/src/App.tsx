import { useState } from "react";
import TodoList from "./components/TodoList/TodoList.tsx";
import { addTodo } from "./store/todoSlice.ts";
import { useAppDispatch } from "./hook.ts";

export type TTodo = {
  id: string;
  text: string;
  completed: boolean;
};

export default function App() {
  const [text, setText] = useState<string>("");
  const dispatch = useAppDispatch();
  const addTask = () => {
    dispatch(addTodo({ text }));
    setText("");
  };

  return (
    <>
      <TodoList />
      <label htmlFor="text-title">TODO name </label>
      <input
        value={text}
        type="text"
        id="text-title"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => addTask()}>Add Todo</button>
    </>
  );
}

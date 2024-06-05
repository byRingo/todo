import { useState } from "react";
import TodoList from "./components/TodoList/TodoList.tsx";
import { useDispatch } from "react-redux";
import { addTodo } from "./store/todoSlice.ts";

export type TTodo = {
  id: string;
  text: string;
  completed: boolean;
};

export default function App() {
  const [text, setText] = useState<string>("");
  const dispatch = useDispatch();
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

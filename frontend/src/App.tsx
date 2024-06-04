import { useState } from "react";
import TodoList from "./components/TodoList/TodoList.tsx";

export type TTodo = {
  id: string;
  text: string;
  completed: boolean;
};

export default function App() {
  const [text, setText] = useState<string>("");
  const [todos, setTodos] = useState<TTodo[]>([]);
  const handleAddTodo = () => {
    setTodos([
      ...todos,
      {
        id: new Date().toISOString(),
        text: text,
        completed: false,
      },
    ]);
    setText("");
  };

  const toggleTodoComplete = (todoId: string) => {
    setTodos(
      todos.map((curTodo) => {
        if (curTodo.id !== todoId) {
          return curTodo;
        }
        return {
          ...curTodo,
          completed: !curTodo.completed,
        };
      }),
    );
  };

  const handleDeleteTodo = (todoId: string) => {
    setTodos(
      todos.filter((curTodo) => {
        return curTodo.id !== todoId;
      }),
    );
  };

  return (
    <>
      <TodoList
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        toggleTodoComplete={toggleTodoComplete}
      />
      <label htmlFor="text-title">TODO name </label>
      <input
        value={text}
        type="text"
        id="text-title"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => handleAddTodo()}>Add Todo</button>
    </>
  );
}

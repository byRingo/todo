import { useState } from "react";

type TTodo = {
  id: string;
  text: string;
  completed: boolean;
};

function App() {
  const [text, setText] = useState<string>("");
  const [todos, setTodos] = useState<TTodo[]>([]);
  const handleSetTodoClick = () => {
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

  const handleDeleteTodo = (todoId: string) => {
    setTodos(
      todos.filter((curTodo) => {
        return curTodo.id !== todoId;
      }),
    );
  };

  return (
    <>
      <ul>
        {todos.map((curTodo) => {
          return (
            <>
              <button
                onClick={() => {
                  curTodo.completed = !curTodo.completed;
                }}
              >
                ✅
              </button>
              <li key={curTodo.id}>{curTodo.text}</li>
              <button onClick={() => handleDeleteTodo(curTodo.id)}>X</button>
            </>
          );
        })}
      </ul>
      <label htmlFor="text-title">TODO name </label>
      <input
        value={text}
        type="text"
        id="text-title"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => handleSetTodoClick()}>Add Todo</button>
    </>
  );
}

export default App;

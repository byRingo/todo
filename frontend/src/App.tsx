import { useEffect, useState } from "react";
import TodoList from "./components/TodoList/TodoList.tsx";
import TodoForm from "./components/TodoForm/TodoForm.tsx";
import { useAppDispatch } from "./hook.ts";
import { fillTodos } from "./store/todoSlice.ts";
import styled from "styled-components";

export type TTodo = {
  id: string;
  text: string;
  completed: boolean;
};

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100dvh;
`;

export default function App() {
  const [text, setText] = useState<string>("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    const localStorageItem = localStorage.getItem("todos");
    let allTodos;
    if (localStorageItem) {
      allTodos = JSON.parse(localStorageItem);
      allTodos.map((cur: TTodo) => {
        dispatch(fillTodos({ id: cur.id, text: cur.text }));
      });
    }
  }, []);

  return (
    <Body>
      <TodoList />
      <TodoForm text={text} setText={setText} />
    </Body>
  );
}

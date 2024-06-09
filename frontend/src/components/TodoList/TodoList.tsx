import TodoItem from "../TodoItem/TodoItem.tsx";
import { useAppSelector } from "../../hook.ts";
import { FormHeader, TodoCanvas, Ul } from "./TodoList.ts";
import React from "react";

export interface TodoListProps {
  children: React.ReactNode;
}

export default function TodoList({ children }: TodoListProps) {
  const todos = useAppSelector((state) => state.todos.todos);
  return (
    <TodoCanvas>
      <FormHeader>TO DO</FormHeader>{" "}
      <Ul>
        {todos.map((curTodo) => {
          return <TodoItem key={curTodo.id} curTodo={curTodo} />;
        })}
      </Ul>
      {children}
    </TodoCanvas>
  );
}

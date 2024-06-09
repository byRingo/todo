import { TTodo } from "../../pages/App/App.tsx";
import {
  editTodoText,
  removeTodo,
  toggleTodoComplete,
} from "../../store/todoSlice.ts";
import { useAppDispatch } from "../../hook.ts";
import {
  Checkmark,
  CompleteButton,
  DeleteButton,
  Item,
  Li,
} from "./TodoItem.ts";
import store from "../../store";
import React from "react";

interface TodoItemProps {
  curTodo: TTodo;
}

export default function TodoItem({ curTodo }: TodoItemProps) {
  const dispatch = useAppDispatch();

  const deleteTodo = (id: string) => {
    dispatch(removeTodo({ id }));
    localStorageUpdate();
  };

  const localStorageUpdate = () => {
    const stores = store.getState();
    localStorage.clear();
    localStorage.setItem("todos", JSON.stringify(stores.todos.todos));
  };

  const editTodo = (id: string, e: React.ChangeEvent) => {
    dispatch(editTodoText({ id: id, text: e.target.innerHTML }));
    localStorageUpdate();
  };

  const toggleComplete = (id: string) => {
    dispatch(toggleTodoComplete({ id }));
    localStorageUpdate();
  };
  return (
    <Item>
      <CompleteButton
        onClick={() => toggleComplete(curTodo.id)}
        $isCompleted={curTodo.isCompleted}
      >
        {" "}
        <Checkmark>L</Checkmark>
      </CompleteButton>
      <Li
        $isCompleted={curTodo.isCompleted}
        key={curTodo.id}
        contentEditable={true}
        onBlur={(e) => editTodo(curTodo.id, e)}
      >
        {curTodo.text}
      </Li>
      <DeleteButton onClick={() => deleteTodo(curTodo.id)}>X</DeleteButton>
    </Item>
  );
}

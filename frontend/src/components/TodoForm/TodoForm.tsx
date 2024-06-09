import React from "react";
import { addTodo } from "../../store/todoSlice.ts";
import { useAppDispatch, useAppSelector } from "../../hook.ts";
import { AddImg, Button, Form, Input } from "./TodoForm.ts";
import plus from "../../assets/plus.png";

interface TodoFormProps {
  text: string;
  setText: (value: string) => void;
}

export default function TodoForm({ text, setText }: TodoFormProps) {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos.todos);
  const addTask = () => {
    if (text.trim().length === 0) {
      alert("Ввод не должен быть пустым");
    } else {
      dispatch(addTodo({ text }));
    }
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("todos", JSON.stringify(todos));
    setText("");
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <Button onClick={() => addTask()}>
        <AddImg src={plus} alt="" />
      </Button>
      <Input
        value={text}
        type="text"
        id="text-title"
        placeholder="Добавить задачу"
        maxLength={30}
        onChange={(e) => setText(e.target.value)}
      />
    </Form>
  );
}

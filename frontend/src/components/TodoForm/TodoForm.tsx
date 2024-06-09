import React from "react";
import { addTodo } from "../../store/todoSlice.ts";
import { useAppDispatch, useAppSelector } from "../../hook.ts";
import { Button, Form, Input, Label } from "./TodoForm.ts";

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
      <Label htmlFor="text-title">Название задачи</Label>
      <Input
        value={text}
        type="text"
        id="text-title"
        onChange={(e) => setText(e.target.value)}
      />
      <Button onClick={() => addTask()}>Добавить задачу</Button>
    </Form>
  );
}

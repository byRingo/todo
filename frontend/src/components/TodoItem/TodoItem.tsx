import { TTodo } from "../../pages/App/App.tsx";
import { removeTodo, toggleTodoComplete } from "../../store/todoSlice.ts";
import { useAppDispatch } from "../../hook.ts";
import {
  Checkmark,
  CompleteButton,
  DeleteButton,
  Item,
  Li,
} from "./TodoItem.ts";
import store from "../../store";

interface TodoItemProps {
  curTodo: TTodo;
}

export default function TodoItem({ curTodo }: TodoItemProps) {
  const dispatch = useAppDispatch();

  const deleteTodo = (id: string) => {
    dispatch(removeTodo({ id }));
    const stores = store.getState();
    localStorage.clear();
    localStorage.setItem("todos", JSON.stringify(stores.todos.todos));
  };

  const toggleComplete = (id: string) => {
    dispatch(toggleTodoComplete({ id }));
    const stores = store.getState();
    localStorage.clear();
    localStorage.setItem("todos", JSON.stringify(stores.todos.todos));
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

      <Li $isCompleted={curTodo.isCompleted} key={curTodo.id}>
        {curTodo.text}
      </Li>
      <DeleteButton onClick={() => deleteTodo(curTodo.id)}>X</DeleteButton>
    </Item>
  );
}

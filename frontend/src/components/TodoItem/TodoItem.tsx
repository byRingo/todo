import { TTodo } from "../../App.tsx";
import { removeTodo, toggleTodoComplete } from "../../store/todoSlice.ts";
import { useAppDispatch, useAppSelector } from "../../hook.ts";
import { CompleteButton, Item, Li } from "./TodoItem.ts";

interface TodoItemProps {
  curTodo: TTodo;
}

export default function TodoItem({ curTodo }: TodoItemProps) {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos.todos);

  const deleteTodo = (id: string) => {
    dispatch(removeTodo({ id }));
    console.log(todos);
  };

  // const setTodosLocalStorage = (todos: TTodo[]) => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // };
  const toggleComplete = (id: string) => {
    console.log(1);
    dispatch(toggleTodoComplete({ id }));
  };
  return (
    <Item>
      <CompleteButton onClick={() => toggleComplete(curTodo.id)}>
        {(curTodo.completed && "✅") || "❌"}
      </CompleteButton>
      <Li $isCompleted={curTodo.completed} key={curTodo.id}>
        {curTodo.text}
      </Li>
      <button onClick={() => deleteTodo(curTodo.id)}>X</button>
    </Item>
  );
}

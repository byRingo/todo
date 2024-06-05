import { TTodo } from "../../App.tsx";
import { removeTodo, toggleTodoComplete } from "../../store/todoSlice.ts";
import { useAppDispatch } from "../../hook.ts";

interface TodoItemProps {
  curTodo: TTodo;
}

export default function TodoItem({ curTodo }: TodoItemProps) {
  const dispatch = useAppDispatch();
  const deleteTodo = (id: string) => {
    dispatch(removeTodo({ id }));
  };
  const toggleComplete = (id: string) => {
    dispatch(toggleTodoComplete({ id }));
  };
  return (
    <>
      <button onChange={() => toggleComplete(curTodo.id)}>✅</button>
      <li key={curTodo.id}>{curTodo.text}</li>
      <button onClick={() => deleteTodo(curTodo.id)}>X</button>
    </>
  );
}

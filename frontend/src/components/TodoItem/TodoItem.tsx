import { TTodo } from "../../App.tsx";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodoComplete } from "../../store/todoSlice.ts";

interface TodoItemProps {
  curTodo: TTodo;
}

export default function TodoItem({ curTodo }: TodoItemProps) {
  const dispatch = useDispatch();
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

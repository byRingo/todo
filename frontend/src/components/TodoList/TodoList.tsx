import TodoItem from "../TodoItem/TodoItem.tsx";
import { useAppSelector } from "../../hook.ts";

export default function TodoList() {
  const todos = useAppSelector((state) => state.todos.todos);
  return (
    <ul>
      {todos.map((curTodo) => {
        return <TodoItem key={curTodo.id} curTodo={curTodo} />;
      })}
    </ul>
  );
}

import TodoItem from "../TodoItem/TodoItem.tsx";
import { useSelector } from "react-redux";

export default function TodoList() {
  const todos = useSelector((state) => state.todos.todos);
  return (
    <ul>
      {todos.map((curTodo) => {
        return <TodoItem key={curTodo.id} curTodo={curTodo} />;
      })}
    </ul>
  );
}

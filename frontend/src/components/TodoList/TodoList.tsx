import TodoItem from "../TodoItem/TodoItem.tsx";
import { useAppSelector } from "../../hook.ts";
import { Ul } from "./TodoList.ts";

export default function TodoList() {
  const todos = useAppSelector((state) => state.todos.todos);
  return (
    todos.length > 0 && (
      <Ul>
        {todos.map((curTodo) => {
          return <TodoItem key={curTodo.id} curTodo={curTodo} />;
        })}
      </Ul>
    )
  );
}

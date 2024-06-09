import TodoItem from "../TodoItem/TodoItem.tsx";
import { useAppSelector } from "../../hook.ts";
import { FormHeader, TodoCanvas, Ul } from "./TodoList.ts";

export default function TodoList() {
  const todos = useAppSelector((state) => state.todos.todos);
  return (
    <TodoCanvas>
      <FormHeader>Todo List</FormHeader>{" "}
      <Ul>
        {todos.map((curTodo) => {
          return <TodoItem key={curTodo.id} curTodo={curTodo} />;
        })}
      </Ul>
    </TodoCanvas>
  );
}

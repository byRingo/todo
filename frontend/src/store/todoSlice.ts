import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TTodo = {
  id: string;
  text: string;
  completed: boolean;
};

type TodosState = {
  todos: TTodo[];
};

const initialState: TodosState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo(state, action: PayloadAction<{ text: string }>) {
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
      });
    },
    fillTodos(state, action: PayloadAction<{ id: string; text: string }>) {
      state.todos.push({
        id: action.payload.id,
        text: action.payload.text,
        completed: false,
      });
    },
    removeTodo(state, action: PayloadAction<{ id: string }>) {
      state.todos = state.todos.filter((curTodo) => {
        return curTodo.id !== action.payload.id;
      });
    },
    toggleTodoComplete(state, action: PayloadAction<{ id: string }>) {
      const toggledTodo = state.todos.find(
        (todo) => todo.id === action.payload.id,
      );
      if (toggledTodo) {
        toggledTodo.completed = !toggledTodo.completed;
      }
    },
  },
});

export const { addTodo, fillTodos, removeTodo, toggleTodoComplete } =
  todoSlice.actions;

export default todoSlice.reducer;

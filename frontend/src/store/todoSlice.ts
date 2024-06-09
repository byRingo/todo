import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TTodo } from "../pages/App/App.tsx";

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
        isCompleted: false,
      });
    },
    fillTodos(
      state,
      action: PayloadAction<{ id: string; text: string; isCompleted: boolean }>,
    ) {
      state.todos.push({
        id: action.payload.id,
        text: action.payload.text,
        isCompleted: action.payload.isCompleted,
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
        toggledTodo.isCompleted = !toggledTodo.isCompleted;
      }
    },
    editTodoText(state, action: PayloadAction<{ id: string; text: string }>) {
      const todoForEdit = state.todos.find(
        (todo) => todo.id === action.payload.id,
      );
      if (todoForEdit) {
        todoForEdit.text = action.payload.text;
      }
    },
  },
});

export const {
  addTodo,
  fillTodos,
  removeTodo,
  toggleTodoComplete,
  editTodoText,
} = todoSlice.actions;

export default todoSlice.reducer;

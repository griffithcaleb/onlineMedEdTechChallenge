import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Todo {
  id: string;
  name: string;
  description: string;
  targetCompletionDate: string;
  completionDate?: string;
  completed?: boolean
}

const initialState: Todo[] = []

export const todosSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<Todo[]>) => {
      return [...action.payload]
    },
    createTodo: (state, action: PayloadAction<Todo>)=> {
      console.log(action.payload, 'poop')
      return (
        [...state, action.payload]
      )
    },
    completeTodo: (state: Todo[], action: PayloadAction<string>) => {
      return (
        state.map(todo => todo.id === action.payload ? {
          ...todo, completed: true, completionDate: new Date(Date.now()).toLocaleDateString()
        } : todo)
      )
    },
    setTodoToNotComplete: (state: Todo[], action: PayloadAction<string>) => {
      return (
        state.map(todo => todo.id === action.payload ? {
          ...todo, completed: false, completionDate: undefined
        } : todo)
      )
    },
    updateTodo: (state: Todo[], action: PayloadAction<any>) => {
      return (
        state.map(todo => todo.id === action.payload.id ? {
          ...action.payload.updatedTodo
        } : todo)
      )
    },
    deleteTodo: (state: Todo[], action: PayloadAction<string>) => {
      return (
       [ ...state.filter(todo => todo.id !== action.payload)]
      )
    }
  },
});

export const todoActions = todosSlice.actions;

export default todosSlice.reducer;

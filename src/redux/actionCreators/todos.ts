import { store } from '../store';
import { Todo, todoActions } from '../slices/todosSlice';
import { AddTodoFormFields } from '../../lib/forms/todoForm';
import { getData, storeData } from '../../lib/AsyncStorage';

export const setTodos = () => {
  getData().then(data => {
    if (data) {
      store.dispatch(todoActions.setTodos(data));
    }
  }).catch(e => console.log(e));
};
export const createNewTodo = (values: AddTodoFormFields): void => {

  const todo: Todo = {
    id: `_${Math.random().toString(36)}`,
    name: values.name,
    description: values.description,
    targetCompletionDate: new Date(values.date).toLocaleDateString(),
    completed: false
  };
  getData().then(data => {
    if (data) {
      storeData([...data, todo]).catch(e => console.log(e));
    } else {
      storeData([todo]).catch(e => console.log(e));
    }
  }).catch(e => console.log(e));
  store.dispatch(todoActions.createTodo(todo));
};
export const completeTodo = (id: string): void => {
  getData().then(data => {
    if (data) {
      storeData([...data].map(todo => todo.id === id
        ? { ...todo, completed: true } : todo)).catch(e => console.log(e));
    }
  }).catch(e => console.log(e));
  store.dispatch(todoActions.completeTodo(id));
};
export const setTodoToNotCompleted = (id: string): void => {
  getData().then(data => {
    if (data) {
      storeData([...data].map(todo => todo.id === id
        ? { ...todo, completed: false } : todo)).catch(e => console.log(e));
    }
  }).catch(e => console.log(e));
  store.dispatch(todoActions.setTodoToNotComplete(id));
};
export const updateTodo = (todo: Todo, values: AddTodoFormFields): void => {
  const {id, completed, completionDate } = todo;
  const updatedTodo: Todo = {
    id,
    name: values.name,
    description: values.description,
    targetCompletionDate: new Date(values.date).toLocaleDateString(),
    completionDate,
    completed
  };
  getData().then(data => {
    if (data) {
      storeData([...data].map(todo => todo.id === id
        ? updatedTodo : todo)).catch(e => console.log(e));
    }
  }).catch(e => console.log(e));
  store.dispatch(todoActions.updateTodo({id, updatedTodo}));
};
export const deleteTodo = (id: string): void => {
  getData().then(data => {
    if (data) {
      storeData([...data].filter(todo => todo.id !== id)).catch(e => console.log(e));
    }
  }).catch(e => console.log(e));
  store.dispatch(todoActions.deleteTodo(id));
};


import React, { useState } from 'react';

import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';

import { Todo } from './models/todo';

const App: React.FC = () => {
  //  VARIAB
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos(prevTodos => [
      ...prevTodos,
      {id: Math.random().toString(), text}
    ]);
  };

  const todoDeleteHandler = (id: string) => {
    setTodos(prevTodos =>{
      return prevTodos.filter(todo => todo.id !== id);
    });
  }
  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler}/>
      <TodoList onDeleteTodo={todoDeleteHandler} items={todos}/>
    </div>
  );
}

export default App;

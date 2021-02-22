import React, {useState } from 'react';
import TodoForm from "./component/TodoForm";
import Todo from "./component/Todo";
import "./App.css";

function App (){
  const [todos, setTodos] = useState([
    {
      text: "Learn about react",
      isCompleted: false,
    },
    {
      text: "Meet friend fro lunch",
      isCompleted: false,
    },
    {
      text: "build really cool todo app",
      isCompleted: false,
    },
  ]);

  const addTodo = text => {
    const NewTodos = [...todos, {text}]
    setTodos(NewTodos)
  }

    const completeTodo = index =>{
      const newTodos = [ ...todos];
      newTodos[index].isCompleted = true;
      setTodos(newTodos)
    }
  
    const removeTodo = index =>{
      const newTodos = [...todos];
      newTodos.splice(index, 1)
      setTodos(newTodos);
    }

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );

}

export default App;
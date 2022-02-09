import logo from './logo.svg';
// import './App.css';
import Form from './Form';
import TaskList from './TaskList';
import { useState } from 'react';


function App() {
  const [todos,setTodos] = useState([])

  return (
    <div className="App">
      <Form todos={todos} setTodos={setTodos} />
      <TaskList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App





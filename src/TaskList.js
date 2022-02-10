import React, { useState } from 'react';
import { createContext } from 'react'; 
import Task from './Task';

const TaskList = (todos, setTodos) => {
   
  return (
      <div className="list_container">
          <div className="todos">
              {todos.map(todo => {
                  <Task/>
              })}
          </div>
    </div>
  )
};

export default TaskList;

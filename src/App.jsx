import React from 'react';
import './App.css';
import ToDoList from './ToDoList';
import taskListLogo from './assets/taskListLogoDark.svg';

function App() {
  return (
    <div className="wrapper">
      {/* <h2>Task Planner</h2> */}
      <img src={taskListLogo} alt="Task List Notepad Logo" />
      <ToDoList />
    </div>
  );
}

export default App;
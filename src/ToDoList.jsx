import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import NewToDoForm from './NewToDoForm';
import ToDo from './ToDo';

function ToDoList() {
  const [todos, setTodos] = useState({});
  const removeToDo = pickedKey =>
    setTodos(prevTodos => {
      const { [pickedKey]: _, ...newTodos } = prevTodos;
      return newTodos;
    });

  const addToDo = newTaskName => {
    const newTodo = {
      key: uuidv4(),
      name: newTaskName,
      status: 'Not Completed',
    };
    setTodos(prevTodos => ({ ...prevTodos, [newTodo.key]: newTodo }));
  }

  const changeStatus = event => {
    const taskKey = event.currentTarget.parentElement.getAttribute('data-id');
    const foundTask = Object.values(todos).find(v => v.key === taskKey);
    if (!foundTask)
      return;
    switch (foundTask.status) {
      case 'Not Completed':
        foundTask.status = "Completed";
        break;
      case 'Completed':
        foundTask.status = "Not Completed";
        break;
      default:
        console.error('Unknown action!');
    }
    setTodos({ ...todos });
  }

  return (
    <>
      <NewToDoForm
        addToDo={addToDo}
      />
      {
        Object.values(todos).map(todo => (
          <ToDo
            key={todo.key}
            id={todo.key}
            name={todo.name}
            status={todo.status}
            removal={removeToDo}
            statusChange={changeStatus}
          />
        ))
      }
    </>
  )
}

export default ToDoList;
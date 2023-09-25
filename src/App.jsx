import React, { useReducer } from 'react';
import TaskList from './componenet/TaskList';
import TaskForm from './componenet/TaskForm';
import './App.css';
import './componenet/tailwind.css';

const initialState = {
  tasks: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTask = (task) => {
    dispatch({ type: 'ADD_TASK', payload: task });
  };

  const deleteTask = (taskId) => {
    dispatch({ type: 'DELETE_TASK', payload: taskId });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={state.tasks} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
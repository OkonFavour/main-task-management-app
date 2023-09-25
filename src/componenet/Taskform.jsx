import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() === '' || dueDate.trim() === '') {
      return;
    }
    addTask({
      name: taskName,
      dueDate,
      id: Date.now().toString(),
    });
    setTaskName('');
    setDueDate('');
  };

  return (
    <div className="mt-4">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Task name"
            className="border-2 border-gray-200 p-2 rounded-lg"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
          <input
            type="date"
            className="border-2 border-gray-200 p-2 rounded-lg"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
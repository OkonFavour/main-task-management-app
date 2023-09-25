import React from 'react';

const TaskList = ({ tasks, deleteTask }) => {
  if (tasks.length === 0) {
    return <p>No tasks to display.</p>;
  }

  return (
    <div className="mt-4">
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li key={task.id} className="flex justify-between items-center bg-white p-4 shadow-md rounded-lg">
            <div>
              <p className="font-semibold">{task.name}</p>
              <p className="text-gray-500">{task.dueDate}</p>
            </div>
            <button
              onClick={() => deleteTask(task.id)}
              className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
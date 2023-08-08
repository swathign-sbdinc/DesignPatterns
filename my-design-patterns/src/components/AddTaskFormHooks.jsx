import React, { useState } from 'react';

const AddTaskFormHooks = () => {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      setTasks([...tasks, taskText]);
      setTaskText('');
    }
  };

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleAddTask();
    }}>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Enter task..."
      />
      <button type="submit">Add Task</button>
      <div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </form>
  );
};

export default AddTaskFormHooks;

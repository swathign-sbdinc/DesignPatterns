import React, { useState } from 'react';
import AddTaskForm from './AddTaskForm';

const TaskContainer = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <>
  <AddTaskForm onAddTask={handleAddTask} />
  <span>{tasks}</span>
    </>
  );
};

export default TaskContainer;

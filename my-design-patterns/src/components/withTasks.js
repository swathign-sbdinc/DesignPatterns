import React, { useState } from 'react';

const withTasks = (WrappedComponent) => {
  const WithTasks = (props) => {
    const [tasks, setTasks] = useState([]);

    const handleAddTask = (task) => {
      setTasks([...tasks, task]);
    };

    return <WrappedComponent {...props} tasks={tasks} onAddTask={handleAddTask} />;
  };

  return WithTasks;
};

export default withTasks;

import React, { useState } from 'react';

const RenderProp = ({ render }: { render: (handleAddTask: (task: string) => void) => JSX.Element }) => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task: string) => {
    setTasks([...tasks, task]);
  };

  return render(handleAddTask);
};

export default RenderProp;

import React from 'react';
// import logo from './logo.svg';
import './App.css';
import TaskContainer from './components/Containercomp';
import RenderProp from './components/RenderProp';
import AddTaskForm from './components/AddTaskForm';
import withTasks from './components/withTasks';
import AddTaskForm2 from './components/AddTaskForm2';
import AddTaskFormHooks from './components/AddTaskFormHooks';

function App() {
  const EnhancedAddTaskForm = withTasks(AddTaskForm2);

  return (
    <div className="App">
        <h1>Todo App By Container/Component Pattern</h1>
        <TaskContainer/>

        <h1>Todo App By Render Props</h1>
        <RenderProp render={(handleAddTask) => <AddTaskForm onAddTask={handleAddTask} />} />

        <h1>Todo App by Higher-Order Components (HOCs):</h1>
        <EnhancedAddTaskForm />

        <h1>Todo App by Hooks:</h1>
        <AddTaskFormHooks />
    </div>
  );
}

export default App;

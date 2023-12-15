import React, { useState } from 'react';
import './App.css';
import AddTaskForm from './Component/AddTaskForm';
import TaskList from './Component/TaskList';
import Header from './Component/Header';

//export so it can be in component
export interface Task {
  id: number;
  text: string;
  completed: boolean;
}


const App: React.FC = () => {
  // usehook
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  const addTask = () => {
    //setting id unique for each task
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };
  const toggleTask = (taskId: number) => {

    //toggle complete state using spread operator
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };
  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (

    <div className="App">
      {/* header component */}
      <Header />
      {/* add task form component */}
      <AddTaskForm newTask={newTask} setNewTask={setNewTask} addTask={addTask} />
      {/* display task list component */}
      <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </div>
  );
};

export default App;

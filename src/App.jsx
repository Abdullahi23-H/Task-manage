import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./index.css";
const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("Tasks", JSON.stringify(tasks));
  }, [tasks]);
  useEffect(() => {
    const storedTasks = localStorage.getItem("Tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);
  const handleAddTask = (newTask) => {
    setTasks((prev) => [newTask, ...prev]);
  };
  const handleToggleTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            completed: !task.completed,
          }
        : task
    );
    setTasks(updatedTasks);
  };
  const handleDelete = (id) => {
    const updateTask = tasks.filter((task) => task.id !== id);
    setTasks(updateTask);
  };
  const handleEdit = (id, newTitle) => {
    const updatedEditTasks = tasks.map((task) =>
      task.id === id ? { ...task, title: newTitle } : task
    );
    setTasks(updatedEditTasks);
  };
  const filtredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incompleted") return !task.completed;
    return true;
  });

  return (
    <div className="App">
      <Header />
      <TaskForm onAdd={handleAddTask} />
      <TaskList
        tasks={filtredTasks}
        onToggle={handleToggleTask}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
      <div className="filter-buttons">
        <button
          onClick={() => setFilter("all")}
          style={{ fontWeight: filter === "all" ? "bold" : "normal" }}
        >
          All
        </button>
        <button
          onClick={() => setFilter("completed")}
          style={{
            fontWeight: filter === "completed" ? "bold" : "normal",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        >
          Completed
        </button>
        <button
          onClick={() => setFilter("incomplete")}
          style={{
            fontWeight: filter === "all" ? "bold" : "normal",
          }}
        >
          incomplete
        </button>
      </div>
    </div>
  );
};

export default App;

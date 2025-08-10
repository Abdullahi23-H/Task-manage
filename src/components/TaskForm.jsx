import React, { useState } from "react";

const TaskForm = ({ onAdd }) => {
  const [task, setTask] = useState("");
  const [dueDate, setDueDate] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    onAdd({
      id: Date.now(),
      title: task,
      completed: false,
      dueDate: dueDate || null,
    });
    setTask("");
    setDueDate("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TaskForm;

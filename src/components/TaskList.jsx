import React, { useState } from "react";
import DeleteModel from "../DeleteModel";

const TaskList = ({ tasks, onToggle, onDelete, onEdit }) => {
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [isModelOpen, setIsModelOpen] = useState(false);

  const confirmDelete = (taskId) => {
    setTaskToDelete(taskId);
    setIsModelOpen(true);
  };
  const handleDeleteComfirmed = () => {
    if (taskToDelete) {
      onDelete(taskToDelete);
      setTaskToDelete(null);
      setIsModelOpen(false);
    }
  };

  const handleEditStart = (task) => {
    setEditingId(task.id);
    setEditText(task.title);
  };
  const handleEditSubmit = (e, id) => {
    e.preventDefault();
    onEdit(id, editText.trim());
    setEditingId(null);
    setEditText("");
  };

  return (
    <>
      <ul>
        {tasks.length === 0 ? (
          <p>No tasks yet</p>
        ) : (
          tasks.map((task) => (
            <li key={task.id}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggle(task.id)}
              />
              {editingId === task.id ? (
                <form onSubmit={(e) => handleEditSubmit(e, task.id)}>
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    autoFocus
                  />
                </form>
              ) : (
                <span
                  style={{
                    textDecoration: task.completed ? "line-through" : "none",
                  }}
                  onDoubleClick={() => handleEditStart(task)}
                >
                  {task.title}
                </span>
              )}
              {task.dueDate && (
                <small style={{ marginRight: "10px", color: "gray" }}>
                  {" "}
                  (Due: {task.dueDate})
                </small>
              )}
              <button
                onClick={() => confirmDelete(task.id)}
                style={{
                  backgroundColor: "dodgerBlue",
                  padding: "5px 10px",
                }}
              >
                X
              </button>
            </li>
          ))
        )}
      </ul>
      <DeleteModel
        isOpen={isModelOpen}
        onclose={() => setIsModelOpen(false)}
        onComfirm={handleDeleteComfirmed}
      />
    </>
  );
};

export default TaskList;

import React, { useState, useContext } from "react";
import TaskContext from "../context/TaskContext";

const TaskForm = () => {
  const { addTask } = useContext(TaskContext);
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    addTask(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task..."
        style={styles.input}
      />
      <button type="submit" style={styles.button}>Add</button>
    </form>
  );
};

const styles = {
  form: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "16px",
  },
  button: {
    padding: "10px 15px",
    background: "#4caf50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "0.3s",
  },
};

export default TaskForm;

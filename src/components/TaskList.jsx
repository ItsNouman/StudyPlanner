import React, { useContext } from "react";
import TaskContext from "../context/TaskContext";

const TaskList = () => {
  const { tasks, toggleTask, deleteTask } = useContext(TaskContext);

  return (
    <ul style={styles.taskList}>
      {tasks.map((task, index) => (
        <li key={index} style={{ ...styles.taskItem, textDecoration: task.completed ? "line-through" : "none" }}>
          <span onClick={() => toggleTask(index)}>{task.title}</span>
          <button onClick={() => deleteTask(index)} style={styles.button}>❌</button>
        </li>
      ))}
    </ul>
  );
};

const styles = {
  taskList: {
    listStyle: "none",
    padding: "0",
  },
  taskItem: {
    display: "flex",
    justifyContent: "space-between",
    background: "#fff",
    padding: "10px",
    margin: "8px 0",
    borderRadius: "5px",
    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
  },
  button: {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default TaskList;

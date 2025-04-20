import { createContext, useState, useEffect } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);  // Store tasks in state

  // Fetch tasks from backend when app starts
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/tasks");
        const data = await res.json();
        setTasks(data);
      } catch (err) {
        console.error("Failed to fetch tasks:", err);
      }
    };

    fetchTasks();
  }, []);

  // Function to add a task
  const addTask = async (title) => {
    try {
      const res = await fetch("http://localhost:5000/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title }),
      });
      const newTask = await res.json();
      setTasks((prevTasks) => [...prevTasks, newTask]);
    } catch (error) {
      console.error("Failed to add task:", error);
    }
  };

  // Function to toggle task completion (currently local only)
  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  // Function to delete a task (currently local only)
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;

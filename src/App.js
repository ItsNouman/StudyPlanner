import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { TaskProvider } from "./context/TaskContext";
import './App.css';

function App() {
  return (
    <TaskProvider>
      <div className="App">
        <Header />
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;

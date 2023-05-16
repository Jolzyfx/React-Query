import "./App.css";
import AuthProvider from "./state management/AuthProvider";
import HomePage from "./state management/HomePage";
import NavBar from "./state management/NavBar";
import TaskProvider from "./state management/Tasks/TaskProvider";

function App() {
  return (
    <div>
      <AuthProvider>
        <TaskProvider>
          <NavBar />
          <HomePage />
        </TaskProvider>
      </AuthProvider>
    </div>
  );
}

export default App;

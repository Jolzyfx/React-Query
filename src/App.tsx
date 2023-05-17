import "./App.css";

import Counter from "./state management/counter/Counter";
import HomePage from "./state management/HomePage";
import NavBar from "./state management/NavBar";
import TaskProvider from "./state management/Tasks/TaskProvider";

function App() {
  return (
    <div>
     
        <TaskProvider>
          <Counter/>
          <NavBar />
          <HomePage />
        </TaskProvider>
     
    </div>
  );
}

export default App;

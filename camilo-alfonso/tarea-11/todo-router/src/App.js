import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import TaskRender from "./components/TaskRender";
import EmptyRender from "./components/EmptyRender";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<EmptyRender />} />
          <Route path="/:id" element={<TaskRender />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

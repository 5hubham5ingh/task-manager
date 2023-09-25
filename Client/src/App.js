import { Route, Routes } from "react-router-dom";
import "./App.css";
import LogIn from "./Modules/LogIn";
import SignUp from "./Modules/SignUp";
import TaskManager from "./Modules/TaskManager";
import RequireAuth from "./Modules/RequireAuth";
import Root from "./Modules/Root";
import SnackBar from "./Modules/SnackBar/SnackBar";

function App() {
  return (
    <>
    
      <SnackBar />
      <Routes>
        <Route path="/" element={<Root />}>
        <Route index element={<LogIn />} />
          <Route path="LogIn" element={<LogIn />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route element={<RequireAuth />}>
            <Route path="TaskManager" element={<TaskManager />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;

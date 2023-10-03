import { Route, Routes } from "react-router-dom";

import LogIn from "./Modules/Pages/LogIn";
import SignUp from "./Modules/Pages/SignUp";
import TaskManager from "./Modules/Pages/TaskManager";
import RequireAuth from "./Modules/RequireAuth";
import SnackBar from "./Modules/Components/SnackBar/SnackBar";
import WorkSpace from "./Modules/Pages/WorkSpace";
import { BackGround } from "./Modules/Components/Background";

function App() {
  return (
    <>
      <SnackBar />
      <Routes>

        //Public route
        <Route path='/' element={<BackGround itemAlignment='center' />}>
          <Route index element={<LogIn />} />
          <Route path="LogIn" element={<LogIn />} />
          <Route path="SignUp" element={<SignUp />} />
        </Route>


        //Private route
        <Route path="/" element={<RequireAuth />}>
          <Route path="TaskManager" element={<TaskManager />} /> //get all task
          <Route path="WorkSpaces" element={<WorkSpace />} /> //get all
          WorkSpace
        </Route>

      </Routes >
    </>
  );
}

export default App;

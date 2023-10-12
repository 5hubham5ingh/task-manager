import { lazy } from "react";
import RequireUserAuth from "../Authentication/User/RequireUserAuth";
import RenderSuspenseRoute from "./Helpers/RenderSuspenseRoutes";
import { Route } from "react-router-dom";

const TaskManager = lazy(() => import("../Pages/TaskManager"));
const WorkSpace = lazy(() => import("../Pages/WorkSpace"));

function PrivateRoutes() {
  const createPrivateRoute = (path, element) => {
    return (
      <Route path="/" element={<RequireUserAuth />}>
        {RenderSuspenseRoute({
          path,
          element,
        })}
      </Route>
    );
  };

  return (
    <>
      {createPrivateRoute("TaskManager/:workspaceId", <TaskManager />)}
      {createPrivateRoute("Workspaces/:userId", <WorkSpace />)}
    </>
  );
}

export default PrivateRoutes;

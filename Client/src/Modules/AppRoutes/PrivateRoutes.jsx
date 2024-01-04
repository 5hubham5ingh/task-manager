import { lazy } from "react";
import RequireUserAuth from "../Authentication/User/RequireUserAuth";
import RenderSuspenseRoute from "./Helpers/RenderSuspenseRoutes";
import { Route } from "react-router-dom";

const Workspace = lazy(() => import("../Views/Workspace"));
const Workspaces = lazy(() => import("../Views/Workspaces"));

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
      {createPrivateRoute("Workspace/:workspaceId", <Workspace />)}
      {createPrivateRoute("Workspaces/:userId", <Workspaces />)}
    </>
  );
}

export default PrivateRoutes;

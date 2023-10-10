import { lazy } from "react"
import RequireUserAuth from "../Authentication/User/RequireUserAuth"
import RenderSuspenseRoute from "./Helpers/RenderSuspenseRoutes";
import { Route } from "react-router-dom";

const TaskManager = lazy(() => import("../Pages/TaskManager"));
const WorkSpace = lazy(() => import("../Pages/WorkSpace"));

function PrivateRoutes() {
    return (
        <Route path="/" element={<RequireUserAuth />}>
            <Route>
            {RenderSuspenseRoute ({path:"TaskManager/:workspaceId", element:<TaskManager /> })}
            </Route>
            <Route>
            {RenderSuspenseRoute ({path:"Workspaces/:userId", element:<WorkSpace /> })}
            </Route>
        </Route>
    )
}

export default PrivateRoutes
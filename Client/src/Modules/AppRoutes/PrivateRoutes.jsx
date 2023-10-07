import { lazy } from "react"
import RequireUserAuth from "../Authentication/User/RequireUserAuth"
import RenderSuspenseRoute from "./Helpers/RenderSuspenseRoutes";
import { Route } from "react-router-dom";

const TaskManager = lazy(() => import("../Pages/TaskManager"));
const WorkSpace = lazy(() => import("../Pages/WorkSpace"));

function PrivateRoutes() {
    return (
        <Route path="/" element={<RequireUserAuth />}>
            <RenderSuspenseRoute path="TaskManager" element={<TaskManager />} />
            <RenderSuspenseRoute path="WorkSpaces" element={<WorkSpace />} />
        </Route>
    )
}

export default PrivateRoutes
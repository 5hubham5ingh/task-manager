import { lazy } from "react"
import { BackGround } from "../Components/Background"
import RenderSuspenseRoute from "./Helpers/RenderSuspenseRoutes"
import { Route } from "react-router-dom"
import Home from '../Pages/Home'

const SignUp = lazy(() => import("../Pages/SignUp"));
const LogIn = lazy(() => import('../Pages/LogIn'));

function PublicRoutes() {
  return (
    <Route path='/' element={<BackGround itemAlignment='center' />}>
      <Route index element={<Home />} />
      <RenderSuspenseRoute path='LogIn' element={<LogIn />} />
      <RenderSuspenseRoute path="SignUp" element={<SignUp />} />
    </Route>
  )
}

export default PublicRoutes
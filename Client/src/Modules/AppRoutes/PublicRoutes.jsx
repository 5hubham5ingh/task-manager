import { lazy } from "react";
import { BackGround } from "../Components/Common/Background";
import RenderSuspenseRoute from "./Helpers/RenderSuspenseRoutes";
import { Route } from "react-router-dom";
import Home from "../Views/Home";

const SignUp = lazy(() => import("../Views/SignUp/SignUp"));
const LogIn = lazy(() => import("../Views/LogIn/LogIn"));

function PublicRoutes() {
  return (

    <Route path="/" element={<BackGround itemAlignment="center" />}>
      <Route index path='Home' element={<Home />} />

      {RenderSuspenseRoute({ path: "LogIn", element: <LogIn /> })}

      {RenderSuspenseRoute({ path: "SignUp", element: <SignUp /> })}

    </Route>

  );
}

export default PublicRoutes;

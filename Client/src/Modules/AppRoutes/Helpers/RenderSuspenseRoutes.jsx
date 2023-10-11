import { Suspense } from "react";
import { Route } from "react-router-dom";
import Loader from "../../Components/Core/Loaders/Loader";

const RenderSuspenseRoute = (props) => {
  const { path, element } = props;
  const getRoute = (path, element) => {
    return {
      path: path,
      element: <Suspense fallback={<Loader />}>{element}</Suspense>,
    };
  };
  return <Route {...getRoute(path, element)} />;
};

export default RenderSuspenseRoute;
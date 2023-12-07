import { CircularProgress } from "@mui/material";
import { Suspense } from "react";
import { Route } from "react-router-dom";

const RenderSuspenseRoute = (props) => {
  const { path, element } = props;
  const getRoute = (path, element) => {
    return {
      path: path,
      element: <Suspense fallback={<CircularProgress />}>{element}</Suspense>,
    };
  };
  return <Route {...getRoute(path, element)} />;
};

export default RenderSuspenseRoute;
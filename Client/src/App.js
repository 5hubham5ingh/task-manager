import { Navigate, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./Modules/AppRoutes/PrivateRoutes";
import PublicRoutes from "./Modules/AppRoutes/PublicRoutes";

function App() {
  return (
      <Routes>
        {PublicRoutes()}
        {PrivateRoutes()}
        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>

  );
}

export default App;

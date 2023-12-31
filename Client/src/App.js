import { Navigate, Route, Routes } from "react-router-dom";
import Snackbar from './Modules/Components/Snackbar/Snackbar'
import PrivateRoutes from "./Modules/AppRoutes/PrivateRoutes";
import PublicRoutes from "./Modules/AppRoutes/PublicRoutes";

function App() {
  return (
    <>
      <Snackbar />
      <Routes>
        {PublicRoutes()}
        {PrivateRoutes()}
        <Route path='*' element={<Navigate to='/Home'/>}/>
      </Routes>
    </>
  );
}

export default App;

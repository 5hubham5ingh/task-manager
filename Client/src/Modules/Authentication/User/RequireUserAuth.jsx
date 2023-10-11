import { useSelector, useDispatch } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { BackGround } from '../../Components/Background';

function RequireUserAuth() {
  const user = useSelector(state=>state.user);


  if(user) return <BackGround itemAlignment='center'><Outlet/></BackGround>;
  else return <Navigate to='/logIn'/>;


  //return <BackGround itemAlignment='center'><Outlet/></BackGround>
}

export default RequireUserAuth;
import { useSelector, useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { BackGround } from '../../Components/Background';

function RequireUserAuth() {
  const user = useSelector((state) => state.user);

  return (

    user ? <Outlet /> :
     <BackGround itemAlignment='center'>
       <h1>Please login first.</h1>
     </BackGround>
    

  )
}

export default RequireUserAuth;

import { useTheme } from '@emotion/react'
import { Outlet } from 'react-router-dom'

function RequireAuth() {

  return (

    <Outlet/>
  
  )
}

export default RequireAuth
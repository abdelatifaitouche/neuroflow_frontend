


import React , {useContext} from 'react'
import AuthContext from '../context/AuthContext'
import { Navigate, Route } from 'react-router-dom';

function PrivateRoute({ children, ...rest }) {

    const {isAuthenticated} = useContext(AuthContext);


  
    return (
        isAuthenticated ? children : <Navigate to="login"/>
      );
  
}

export default PrivateRoute




import React , {useContext} from 'react'
import AuthContext from '../context/AuthContext'
import { Navigate, Route } from 'react-router-dom';
import LoadingScreen from '@/LoadingScreen';

function PrivateRoute({ children, ...rest }) {

    const {isAuthenticated} = useContext(AuthContext);

    if (isAuthenticated === null) {
        return <LoadingScreen />; // Show a loading screen while checking auth
    }
  
    return (
        isAuthenticated ? children : <Navigate to="/login"/>
      );
  
}

export default PrivateRoute

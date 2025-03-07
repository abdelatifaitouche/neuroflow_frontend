import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import LoadingScreen from "@/LoadingScreen";

function PrivateRoute({ children }) {
    const { isAuthenticated } = useContext(AuthContext);

    if (isAuthenticated === null) {
        return <LoadingScreen />;
    }

    return isAuthenticated ? children : <Navigate to="/login" />;
}

export default PrivateRoute;

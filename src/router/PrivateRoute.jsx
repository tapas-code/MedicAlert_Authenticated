import React from "react";
import { useKeycloak } from "@react-keycloak/web";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    const { keycloak } = useKeycloak();
    const isAuthenticated = keycloak.authenticated;
    console.log("isAuthenticated", isAuthenticated);
    return isAuthenticated ? <Outlet/> : <Navigate to='/forbidden'/>;
};

export default PrivateRoute;

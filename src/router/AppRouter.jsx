import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import HowItWorks from "../pages/HowItWorks";
import PrivateRoute from "./PrivateRoute";
import Forbidden from "../pages/Forbidden";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route element={<PrivateRoute />}>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="hiw" element={<HowItWorks />} />
                    </Route>
                </Route>

                <Route path="/forbidden" element={<Forbidden />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;

import React from "react";
import {
    Route,
    BrowserRouter as Router,
    Routes,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";

const AppRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
        </Route>
    )
);

export default AppRouter;

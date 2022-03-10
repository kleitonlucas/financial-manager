import { BrowserRouter, Route, useRoutes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";

export const Router = () => {
    return useRoutes([
        {path:"/", element:<Dashboard />}
    ]);
}
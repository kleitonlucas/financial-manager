import { BrowserRouter, Route, useRoutes } from "react-router-dom";
import { Transactions } from "../pages/Transactions";
import { Dashboard } from "../pages/Dashboard";

export const Router = () => {
    return useRoutes([
        {path: "/", element: <Dashboard />},
        {path: "/transactions", element: <Transactions />}
    ]);
}
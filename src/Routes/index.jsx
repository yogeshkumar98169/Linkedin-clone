import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import React from "react";
import Register from "../Pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

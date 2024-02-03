import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import React from "react";
import Register from "../Pages/Register";
import Home from "../Pages/Home";

export const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home></Home>,
  },
  {
    path: "/",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

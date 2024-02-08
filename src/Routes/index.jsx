import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import React from "react";
import Register from "../Pages/Register";
import HomeLayout from "../Layouts/HomeLayout";

export const router = createBrowserRouter([
  {
    path: "/home",
    element: <HomeLayout></HomeLayout>,
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

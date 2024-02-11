import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import React from "react";
import Register from "../Pages/Register";
import HomeLayout from "../Layouts/HomeLayout";
import ProfileLayout from "../Layouts/ProfileLayout";

export const router = createBrowserRouter([
  {
    path: "/home",
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: "/profile",
    element: <ProfileLayout></ProfileLayout>,
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

import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login"
import React from 'react'

export const router =createBrowserRouter([
    {
        path:"login",
        element:<Login></Login>
    }
])

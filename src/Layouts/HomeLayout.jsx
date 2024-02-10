import React from "react";
import Topbar from "../components/common/Topbar/Topbar";
import Home from "../Pages/Home";
export default function HomeLayout() {
  return (
    <div>
      <Topbar></Topbar>
      <Home />
    </div>
  );
}

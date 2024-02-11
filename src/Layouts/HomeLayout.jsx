import React, { useMemo, useState } from "react";
import Topbar from "../components/common/Topbar/Topbar";
import { getCurrentUser } from "../Api/FirestoreAPI";
import Home from "../Pages/Home";
export default function HomeLayout() {
  const [currentUser, setCurrentUser] = useState({});
  useMemo(() => {
    getCurrentUser(setCurrentUser);
  });
  return (
    <div>
      <Topbar></Topbar>
      <Home currentUser={currentUser} />
    </div>
  );
}

import React, { useMemo, useState } from "react";
import Topbar from "../components/common/Topbar/Topbar";
import { getCurrentUser } from "../Api/FirestoreAPI";
import Profile from "../Pages/Profile";

export default function ProfileLayout() {
  const [currentUser, setCurrentUser] = useState({});

  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);
  return (
    <div>
      <Topbar></Topbar>
      <Profile currentUser={currentUser} />
    </div>
  );
}

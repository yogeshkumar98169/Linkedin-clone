import React, { useEffect, useState } from "react";
import ProfileComponent from "../components/ProfileComponent";
import { onAuthStateChanged } from "firebase/auth"; //used to check whether the user is logged in or log out
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import Loader from "../components/common/Loader";

export default function Profile({ currentUser }) {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false); //we import this to see a loader

  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      //   console.log(res.accessToken);
      // console.log(res?.accessToken);
      if (!res?.accessToken) {
        navigate("/"); //if you don't have acces token it will send you to login page again
      } else {
        setLoading(true);
      }
    });
  }, []);
  return loading ? (
    <ProfileComponent currentUser={currentUser} />
  ) : (
    <Loader></Loader>
  );
}

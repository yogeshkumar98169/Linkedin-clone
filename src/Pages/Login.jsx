import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

import LoginComponent from "../components/LoginComponent";
import Loader from "../components/common/Loader";
export default function Login() {
  const [loading, setLoading] = useState(true); //we import this to see a loader
  let navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (res?.accessToken) {
        navigate("/home"); //it will send you to home page instantly if you are logged in
      } else {
        setLoading(false);
      }
    });
  }, []);
  return loading ? <Loader></Loader> : <LoginComponent />;
}

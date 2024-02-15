import React, { useEffect, useState } from "react";
import HomeComponent from "../components/HomeComponent";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import Loader from "../Helper/Loader";
export default function Home({ currentUser }) {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false); //we import this to see a loader

  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      //   console.log(res.accessToken);
      //   console.log(res?.accessToken);
      if (!res?.accessToken) {
        navigate("/"); //if you don't have acces token it will send you to login page again
      } else {
        setLoading(true);
      }
    });
  }, []);
  return loading ? (
    <HomeComponent currentUser={currentUser} />
  ) : (
    <Loader></Loader>
  ); //if loading is true then home component render else loading and then login page
}

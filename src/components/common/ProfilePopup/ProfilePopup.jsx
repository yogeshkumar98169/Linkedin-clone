import React from "react";
import { onLogOut } from "../../../Api/AuthAPI";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export default function ProfilePopup() {
  let navigate = useNavigate();
  const logOut = () => {
    toast.success("Successfully Log you out");
    onLogOut();
  };
  return (
    <div className="absolute right-12 top-12 bg-[#f5f5f5] border-[1px] border-solid border-[#b7b7b7] pr-10 pl-3 py-2 rounded flex ">
      <ul>
        <li onClick={() => navigate("/profile")} className="cursor-pointer">
          Profile
        </li>
        <li onClick={logOut} className="cursor-pointer">
          Log Out
        </li>
      </ul>
    </div>
  );
}

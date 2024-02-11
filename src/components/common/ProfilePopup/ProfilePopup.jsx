import React from "react";
import { onLogOut } from "../../../Api/AuthAPI";
import { toast } from "react-toastify";
import { AiOutlineLogout } from "react-icons/ai";
export default function ProfilePopup() {
  const logOut = () => {
    toast.success("Successfully Log you out");
    onLogOut();
  };
  return (
    <div className="absolute right-12 top-12 bg-[#f5f5f5] border-[1px] border-solid border-[#b7b7b7] pr-10 pl-3 py-2 rounded flex ">
      <ul>
        <li onClick={logOut} className="cursor-pointer">
          <AiOutlineLogout
            size={25}
            className="cursor-pointer text-[#6f6e6e] hover:text-black inline"
          />
          Log Out
        </li>
      </ul>
    </div>
  );
}

import React, { useState } from "react";
import LinkedinLogo from "../../../assets/linkedinLogo.png";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineBell,
  AiOutlineMessage,
} from "react-icons/ai";
import { BsBriefcase } from "react-icons/bs";
import User from "../../../assets/user.png";
import { useNavigate } from "react-router-dom";
import ProfilePopup from "../ProfilePopup/ProfilePopup";
export default function Toobar() {
  const [showPopup, setShowPopup] = useState(false);
  let navigate = useNavigate();
  const goToRoute = (route) => {
    navigate(route);
  };
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <>
      <div className="w-full h-16 bg-white flex justify-between items-center p-6">
        <img src={LinkedinLogo} alt="LinkedinLogo" className="h-10 w-12" />
        <div className="flex flex-row justify-around w-full">
          <AiOutlineSearch
            size={25}
            className="cursor-pointer text-[#6f6e6e] hover:text-black"
          />
          <AiOutlineHome
            size={25}
            className="cursor-pointer text-[#6f6e6e] hover:text-black"
            onClick={() => goToRoute("/home")}
          />
          <AiOutlineUser
            size={25}
            className="cursor-pointer text-[#6f6e6e] hover:text-black"
            onClick={()=>{goToRoute("/profile")}}
          />
          <BsBriefcase
            size={25}
            className="cursor-pointer text-[#6f6e6e] hover:text-black"
          />
          <AiOutlineBell
            size={25}
            className="cursor-pointer text-[#6f6e6e] hover:text-black"
          />
          <AiOutlineMessage
            size={25}
            className="cursor-pointer text-[#6f6e6e] hover:text-black"
          />
        </div>
        <img
          src={User}
          alt="User image"
          className="w-8"
          onClick={togglePopup}
        />
        {showPopup && <ProfilePopup onClose={togglePopup} />}
      </div>
    </>
  );
}

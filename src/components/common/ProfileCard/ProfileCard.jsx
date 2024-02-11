import React from "react";
import { AiOutlineEdit } from "react-icons/ai";

//We are getting currentUser from FireStoreAPI.jsx
export default function ProfileCard({ currentUser, onEdit }) {
  return (
    <div className="bg-white  mt-8 py-5 pl-2 max-w-[500px] m-auto">
      <div className="flex justify-end pr-3">
        <button onClick={onEdit}>
          <AiOutlineEdit size={25} />
        </button>
      </div>
      <div className="pt-5 flex justify-between pr-10">
        <div className="max-w-[200px]">
          <h3 className="font-semibold text-2xl">{currentUser.name}</h3>
          <p className="text-sm font-semibold">{currentUser.headline}</p>
          <p className="text-sm font-semibold pt-2">{currentUser.location}</p>
        </div>

        <div className=" pt-8 place-self-start">
          <p className=" text-sm font-semibold leading-5">
            {currentUser.company}
          </p>
          <p className=" text-sm font-semibold  leading-5">
            {currentUser.college}
          </p>
        </div>
      </div>
    </div>
  );
}

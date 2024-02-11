import React from "react";
import { AiOutlineEdit } from "react-icons/ai";

//We are getting currentUser from FireStoreAPI.jsx
export default function ProfileCard({ currentUser }) {
  return (
    <div className="bg-white  m-8 h-28 pt-5 pl-2">
      <div className="float-right clear-both pr-3">
        <button>
          <AiOutlineEdit size={25} />
        </button>
      </div>
      <div className="pt-5">
        <h3 className="font-semibold text-2xl">{currentUser.name}</h3>
        <p className="text-sm">{currentUser.email}</p>
      </div>
    </div>
  );
}

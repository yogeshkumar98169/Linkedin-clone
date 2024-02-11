import React, { useState } from "react";
import { editProfile } from "../../../Api/FirestoreAPI";

export default function ProfileEdit({ onEdit, currentUser }) {
  const [editInputs, setEditInputs] = useState({});
  const getInput = (event) => {
    let { name, value } = event.target;
    let input = { [name]: value };
    setEditInputs({ ...editInputs, ...input }); //we use 3 dots to do all values
  };
  //   console.log(editInputs);
  const updateProfileData = () => {
    editProfile(currentUser.userID, editInputs);
  };
  return (
    <div className="bg-white  m-auto mt-5 h-auto py-5 px-2 flex flex-col max-w-[500px]">
      <div className="float-right clear-both pr-3">
        <button
          onClick={onEdit}
          className="text-white bg-slate-600 px-5 py-2 rounded"
        >
          Go Back
        </button>
      </div>
      <div className="flex flex-col gap-5 px- py-2">
        <input
          onChange={getInput}
          className="rounded p-2 focus:outline-none bg-white text-black border-2 border-black max-w-[500px]"
          placeholder="Name"
          name="name"
        />
        <input
          onChange={getInput}
          className="rounded p-2 focus:outline-none bg-white text-black border-2 border-black max-w-[500px]"
          placeholder="Headline"
          name="headline"
        />
        <input
          onChange={getInput}
          className="rounded p-2 focus:outline-none bg-white text-black border-2 border-black max-w-[500px]"
          placeholder="Location"
          name="location"
        />
        <input
          onChange={getInput}
          className="rounded p-2 focus:outline-none bg-white text-black border-2 border-black max-w-[500px]"
          placeholder="Company"
          name="company"
        />
        <input
          onChange={getInput}
          className="rounded p-2 focus:outline-none bg-white text-black border-2 border-black max-w-[500px]"
          placeholder="College"
          name="college"
        />
        <input
          onChange={getInput}
          className="rounded p-2 focus:outline-none bg-white text-black border-2 border-black max-w-[500px]"
          placeholder="Skills"
          name="skills"
        />
      </div>
      <div className="place-self-end">
        <button
          className="text-white bg-slate-600 px-5 py-2 rounded"
          onClick={updateProfileData}
        >
          Save
        </button>
      </div>
    </div>
  );
}

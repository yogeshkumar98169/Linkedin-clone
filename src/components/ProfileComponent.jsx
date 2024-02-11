import React, { useState } from "react";
import ProfileCard from "./common/ProfileCard/ProfileCard";
import ProfileEdit from "../components/common/ProfileEdit/ProfileEdit";
export default function ProfileComponent({ currentUser }) {
  const [isEdit, setIsEdit] = useState(false);
  const onEdit = () => {
    setIsEdit(!isEdit);
  };
  return (
    <div>
      {/* When isEdit is true it will render ProfileEdit else it will return ProfileCard */}
      {isEdit ? (
        <ProfileEdit onEdit={onEdit} currentUser={currentUser}></ProfileEdit>
      ) : (
        <ProfileCard currentUser={currentUser} onEdit={onEdit} />
      )}
    </div>
  );
}

import React from "react";
import ProfileCard from "./common/ProfileCard/ProfileCard";

export default function ProfileComponent({ currentUser }) {
  return (
    <div>
      <ProfileCard currentUser={currentUser} />
    </div>
  );
}

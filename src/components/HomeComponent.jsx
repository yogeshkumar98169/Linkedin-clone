import React from "react";
import PostUpdate from "./common/PostUpdate/PostUpdate";
export default function HomeComponent({ currentUser }) {
  return (
    <div>
      <PostUpdate currentUser={currentUser} />
    </div>
  );
}

import React from "react";

export default function PostCard({ posts }) {
  return (
    <div className="flex justify-center items-center mt-10 flex-col">
      <p className="w-[510px] h-28 bg-[#f5f5f5] border-[1px] border-solid border-[#b7b7b7] rounded-lg flex items-center text-left pl-2 text-sm font-normal">
        {posts.status}
      </p>
    </div>
  );
}

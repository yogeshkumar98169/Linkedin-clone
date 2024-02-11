import React from "react";

export default function PostCard({ posts }) {
  return (
    <>
    <div className="flex justify-center items-center mt-10 flex-col">
      <div className="w-full max-w-[510px] h-auto bg-[#f5f5f5] border-[1px] border-solid border-[#b7b7b7] rounded-lg flex justify-start flex-col text-sm font-normal p-5">
        <p>{posts.userName}</p>
        <p className="text-xs text-gray-500 font-normal pb-5">
          {posts.timeStamp}
        </p>
        <p> {posts.status}</p>
      </div>
    </div>
    </>
  );
}

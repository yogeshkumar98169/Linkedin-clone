import React, { useState, useMemo } from "react";
import ModalComponent from "../Modal/ModalComponent";
import { postStatus, getStatus } from "../../../Api/FirestoreAPI"; //import to send data to firestore
import PostCard from "../PostCard/PostCard";
import { getCurrentTimeStamp } from "../../../Helper/Moment";
import { getUniqueId } from "../../../Helper/GetUniqueId";

export default function PostUpdate({ currentUser }) {
  let userEmail = localStorage.getItem("userEmail"); //now we import to send it to Firestore
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [allStatus, setAllStatus] = useState([]); //we can use an array becuase data may be much like comments etc.
  const sendStatus = () => {
    let obj = {
      //SEnding data to firestore
      status: status,
      timeStamp: getCurrentTimeStamp("LLL"),
      userEmail: userEmail,
      userName: currentUser.name,
      postID: getUniqueId(),
    };
    postStatus(obj); //the status and the data is transfered to postStatus function
    setModalOpen(false);
    setStatus("");
  };
  useMemo(() => {
    getStatus(setAllStatus);
  }, []);
  return (
    <div className="flex justify-center items-center mt-10 flex-col">
      <div className="w-full max-w-[510px] h-28 bg-[#f5f5f5] border-[1px] border-solid border-[#b7b7b7] rounded-lg flex justify-center items-center">
        <button
          className="bg-white hover:bg-[#dcdbdb] w-4/5 h-10 text-left rounded-3xl px-4 text-black  border-[1px] border-solid border-[#b7b7b7] cursor-pointer"
          onClick={() => setModalOpen(true)}
        >
          Start a Post
        </button>
        <ModalComponent
          status={status}
          setStatus={setStatus}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          sendStatus={sendStatus}
        />
      </div>
      <div className="w-full max-w-[510px] h-28 ">
        {allStatus.map((posts) => {
          return (
            <div key={posts.id}>
              <PostCard posts={posts}></PostCard>
            </div>
          );
        })}
      </div>
    </div>
  );
}

import React, { useState, useMemo } from "react";
import ModalComponent from "../Modal/ModalComponent";
import { postStatus, getStatus } from "../../../Api/FirestoreAPI"; //import to send data to firestore
import PostCard from "../PostCard/PostCard";
export default function PostUpdate() {
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [allStatus, setAllStatus] = useState([]); //we can use an array becuase data may be much like comments etc.
  const sendStatus = () => {
    postStatus(status); //the status and the data is transfered to postStatus function
    setModalOpen(false);
    setStatus("");
  };

  useMemo(() => {
    getStatus(setAllStatus);
  }, []);
  console.log(allStatus);
  return (
    <div className="flex justify-center items-center mt-10 flex-col">
      <div className="w-[510px] h-28 bg-[#f5f5f5] border-[1px] border-solid border-[#b7b7b7] rounded-lg flex justify-center items-center">
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
      <div>
        {allStatus.map((posts) => {
          return (
            <div>
              <PostCard posts={posts}></PostCard>
            </div>
          );
        })}
      </div>
    </div>
  );
}

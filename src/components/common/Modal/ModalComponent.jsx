import React from "react";
import { Modal, Button } from "antd";
export default function ModalComponent({
  modalOpen,
  setModalOpen,
  setStatus,
  status,
  sendStatus,
}) {
  return (
    <>
      <Modal
        title="Create a Post"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer={[
          <Button
            key="submit"
            type="primary"
            className="bg-sky-600 text-white"
            disabled={status.length > 0 ? false : true} //if length is greater than 0 means someting is inside and set the post button to enabled other make it disable
            onClick={sendStatus}
          >
            Post
          </Button>,
        ]}
      >
        <input
          type="text"
          placeholder="What do you want to talk about"
          className="bg-white w-full border-none outline-none"
          onChange={(e) => {
            setStatus(e.target.value);
          }}
          value={status}
        />
      </Modal>
    </>
  );
}

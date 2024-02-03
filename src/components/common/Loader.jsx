import React from "react";
import { Spin } from "antd";
export default function Loader() {
  return (
    <div className="h-screen w-full flex justify-center items-center flex-col gap-10">
      <Spin tip="" size="large">
        <div className="content"> </div>
      </Spin>
      <p className="text-sky-600 font-semibold">Loading...</p>
    </div>
  );
}

import { useNavigate } from "react-router-dom";
import React from "react";

export default function UseNavigate() {
  let instance = useNavigate();
  const navigate = (params) => {
    instance(params);
  };
}

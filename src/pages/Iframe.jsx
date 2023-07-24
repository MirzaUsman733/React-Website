import React from "react";
import { AiOutlineLike } from "react-icons/ai";
export default function Iframe() {
  return (
    <div className="container my-5">
      <h2 className=" mb-3">
        Like us
        <AiOutlineLike />
        ...{" "}
      </h2>
      <iframe
        src="https://fagel.qodeinteractive.com/"
        className="frm rounded"
        title="it's the Wedding Frame"
        frameBorder="0"
      ></iframe>
    </div>
  );
}

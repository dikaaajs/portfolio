import React from "react";

export default function KiriAtas({ text, move }) {
  return (
    <div
      className={`pt-[50px] pl-[20px] flex gap-[10px] absolute items-center duration-300 ${
        move ? "opacity-100" : "opacity-0"
      }`}
    >
      <img src="/main-kiriatas.svg" alt="" />
      <h1 className={`font-outfit font-medium text-[1.3rem]`}>{text}</h1>
    </div>
  );
}

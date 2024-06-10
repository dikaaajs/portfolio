import React from "react";

export default function Contact() {
  return (
    <div className="h-screen relative">
      <div className="absolute top-[50px] left-[20px] flex gap-[10px] items-center text-white">
        <img src="/main-kiriatas.svg" alt="" />
        <h1 className={`font-outfit font-medium text-[1.3rem] text-black`}>
          Contact.js
        </h1>
      </div>

      <div className="w-full max-w-sm bg-white pt-10 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center pb-10">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src="/me.jpg"
            alt="Bonnie image"
          />
          <h5 className="mb-1 text-xl font-medium font-montserrat text-gray-900 dark:text-white">
            andika rafli
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400 font-rethink">
            web developer
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400 font-rethink">
            zoneandika@gmail.com
          </span>
        </div>
      </div>
    </div>
  );
}

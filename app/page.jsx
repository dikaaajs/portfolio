"use client";

import { useEffect, useState } from "react";
import Main from "./section/main";
import About from "./section/about";

export default function Home() {
  const [move, setMove] = useState(false);
  const [loading, setLoading] = useState(true);
  const [section, setSection] = useState(0);
  const [dialog, setDialog] = useState(false);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    setMove(true);
    const tinggi = window.innerHeight;
    setPosition(section * tinggi);
  }, [section]);

  useEffect(() => {
    setTimeout(() => {
      setDialog(true);
    }, 1000);
  }, []);

  return (
    <div className=" overflow-hidden relative h-screen">
      {/* dialog */}
      <div
        className={`absolute h-screen w-screen z-50 bg-[#1f1f1fd2] ${
          dialog ? "" : "hidden"
        }`}
      >
        <div className="w-[300px] bg-white py-[15px] px-[20px] rounded-md absolute bottom-10 right-[150px]">
          <div className="flex gap-[10px] font-outfit items-center">
            <img src="/hengker.png" alt="" className="rounded-full h-[30px]" />
            <h1 className="font-[500]">hengker</h1>
          </div>
          <div className="">
            <p className="py-[10px] font-mono text-[.8rem]">
              you can click here to move !
            </p>
            <button
              className="py-[5px] px-[10px] bg-blue-500 text-white rounded-lg font-outfit font-[500] text-[.8rem] block ml-auto"
              onClick={() => {
                setDialog(false);
              }}
            >
              alright
            </button>
          </div>
        </div>
      </div>

      {/* navbar */}
      <div className="absolute z-50 right-[50px] bottom-5 flex flex-col gap-[10px]">
        <button>
          <img
            src="/arrow-right.svg"
            className={`bg-[#BBFF1A] p-[10px] rounded-full -rotate-90 active:opacity-50 ${
              dialog ? "shadow-[0_0px_50px_rgba(255,_255,_255,_0.8)]" : ""
            }`}
            alt=""
            onClick={() => setSection(section - 1)}
          />
        </button>
        <button>
          <img
            src="/arrow-right.svg"
            className={`bg-[#BBFF1A] p-[10px] rounded-full rotate-90 active:opacity-50 ${
              dialog ? "shadow-[0_0px_50px_rgba(255,_255,_255,_0.8)]" : ""
            }`}
            alt=""
            onClick={() => {
              setSection(section + 1);
            }}
          />
        </button>
      </div>

      {/* main */}
      <main
        className={`transform transition-transform duration-300 ease-out`}
        style={{ transform: `translateY(-${position}px)` }}
      >
        {/* main  */}
        <Main />

        {/* about */}
        <About />
      </main>
    </div>
  );
}

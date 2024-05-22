"use client";

import { useEffect, useState } from "react";
import Main from "./section/main";
import About from "./section/about";
import Repo from "./section/repo";
import Contact from "./section/contact";

export default function Home() {
  const [move, setMove] = useState(false);
  const [loading, setLoading] = useState(true);
  const [section, setSection] = useState(0);
  const [dialog, setDialog] = useState(false);
  const [position, setPosition] = useState(0);
  const [warning, setWarning] = useState(false);

  useEffect(() => {
    setMove(true);
    const tinggi = window.innerHeight;
    setPosition(section * tinggi);
  }, [section]);

  useEffect(() => {
    setTimeout(() => {
      setDialog(true);
    }, 1000);
    const lebar = window.innerWidth;
    if (lebar < 768) {
      setWarning(true);
    }
  }, []);

  return (
    <div className=" overflow-hidden relative h-screen">
      {/* phone detector */}
      {warning && (
        <div className="w-full h-full fixed backdrop-blur-sm bg-white/30 z-40 inset-0">
          <div className="fixed w-[90%] py-[70px] md:w-[50%] bg-white rounded-md top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 backdrop-brightness-50">
            <h1 className="text-black font-impact uppercase font-bold text-[1.5rem] text-center">
              phone detected
            </h1>
            <p className="text-center font-outfit">
              rotate your phone to access this website
            </p>
            <button
              className="font-outfit py-[3px] px-[10px] bg-blue-500 text-white rounded-md mx-auto block"
              onClick={() => setWarning(false)}
            >
              ok
            </button>
          </div>
        </div>
      )}

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
      <div
        className={`absolute z-50 right-[-5px] bottom-5 flex flex-col justify-center gap-[10px] bg-black md:py-[10px] md:px-[5px] py-[5px] px-[3px] rounded-[5px] border-[2px] border-slate-600 ${
          dialog ? "shadow-[0_0px_50px_rgba(255,_255,_255,_0.8)]" : ""
        }`}
      >
        <button className="w-fit mx-auto">
          <img
            src="/arrow-nav.png"
            className={` active:opacity-50 w-[15px]`}
            alt=""
            onClick={() => {
              if(section === 0){
                return
              }
              setSection(section - 1)}}
          />
        </button>
        <ul className="text-center h-[35px]">
          <li className="text-[#BBFF1A] font-impact font-bold text-[1.2rem] md:text-[1.4rem]">
            0{section + 1}
          </li>
        </ul>
        <button className="w-fit mx-auto">
          <img
            src="/arrow-nav.png"
            className={` rotate-180 active:opacity-50 w-[15px]`}
            alt=""
            onClick={() => {
              if (section === 3) {
                return;
              }
              setSection(section + 1);
            }}
          />
        </button>
      </div>

      {/* main */}
      <main
        className={`transform transition-transform duration-300 ease-out  `}
        style={{ transform: `translateY(-${position}px)` }}
      >
        {/* main  */}
        <Main setSection={setSection} />

        {/* about */}
        <About />

        {/* repository */}
        <Repo />

        {/* contact */}
        <Contact />
      </main>
    </div>
  );
}

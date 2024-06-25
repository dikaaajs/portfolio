import React from "react";

export default function Navbar({ setSection, dialog, section }) {
  return (
    <nav
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
            if (section === 0) {
              return;
            }
            setSection(section - 1);
          }}
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
    </nav>
  );
}

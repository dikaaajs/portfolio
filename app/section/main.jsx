"use client";

import { useEffect, useRef, useState } from "react";

export default function Main({ setSection }) {
  const [move, setMove] = useState(false);
  const mainRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setMove(entry.isIntersecting);
      },
      { threshold: 0.5 } // Anda dapat menyesuaikan nilai ambang sesuai kebutuhan
    );

    observer.observe(mainRef.current);

    // Membersihkan observer saat komponen dilepas
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="h-screen relative overflow-hidden" ref={mainRef}>
      <div
        className={`absolute bottom-5 lg:h-[70px] h-[50px] duration-500 ease-out z-40 ${
          !move ? "w-0" : "w-[90%]"
        }`}
      >
        <img
          src="/garing.svg"
          className="z-50 absolute lg:bottom-[30px] bottom-[20px] left-[30px] h-[30px] lg:h-[50px]"
        />
        <img
          src="/bawah2.svg"
          className="absolute w-full lg:bottom-[20px] bottom-[10px] h-full -z-20"
          alt=""
        />

        <div className="flex gap-[50px] fixed lg:bottom-15 z-50 font-outfit font-medium justify-center w-full text-[.8rem]">
          <button onClick={() => setSection(0)}>Home</button>
          <button onClick={() => setSection(1)}>About</button>
          <button onClick={() => setSection(2)}>Repository</button>
        </div>
      </div>

      <img
        src="/main2.svg"
        className={`absolute top-1/2 transform -translate-y-1/2 duration-500 ease-out left-1/2 -translate-x-1/2 ${
          !move ? "w-full" : "w-[70%]"
        } `}
        alt=""
      />
      <img
        src="/main-people2.png"
        className={`absolute lg:bottom-[200px] bottom-[50px] transform left-1/2 -translate-x-1/2 duration-700 ease-out h-[300px]  ${
          !move ? "lg:scale-[1.5] scale-[1]" : "lg:scale-[2.5] scale-[1.3]"
        }`}
        alt=""
      />

      <img
        src="/bawah.svg"
        className="absolute bottom-0 transform left-1/2 -translate-x-1/2 w-[50%]"
        alt=""
      />
      {/* garis pinggir */}
      <img
        src="/LINE.svg"
        alt=""
        className={`absolute right-6 transform top-1/2 -translate-y-1/2 duration-700 ease-out ${
          !move ? "h-0" : "h-[100hv]"
        }`}
      />
      <div className="flex gap-[1px] absolute top-10 right-10">
        <a href="https://www.instagram.com/dikaaa.js/">
          <img
            src="/instagram.svg"
            className="w-[40px] p-[10px] rounded-full bg-slate-200"
            alt=""
          />
        </a>
        <a href="https://www.linkedin.com/in/andika-rafli-7311a4248/">
          <img
            src="/linkedin.svg"
            className="w-[40px] p-[10px] rounded-full bg-slate-200"
            alt=""
          />
        </a>
      </div>

      <div className="pt-[50px] pl-[20px] flex gap-[10px] items-center">
        <img src="/main-kiriatas.svg" alt="" />
        <h1 className={`font-outfit font-medium text-[1.3rem]`}>Home.js</h1>
      </div>
    </section>
  );
}

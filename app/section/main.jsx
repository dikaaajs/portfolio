"use client";

import { useEffect, useRef, useState } from "react";
import KiriAtas from "../components/KiriAtas";

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
      {/* nav */}
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

        <nav className="flex gap-[50px] fixed lg:bottom-15 z-50 font-outfit font-medium justify-center w-full text-[.8rem]">
          <button onClick={() => setSection(0)}>Home</button>
          <button onClick={() => setSection(1)}>About</button>
          <button onClick={() => setSection(2)}>Repository</button>
        </nav>
      </div>

      {/* text jumbotron */}
      <div
        className={`block absolute h-fit transform top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 duration-700 ease-out z-50 ${
          !move ? "lg:scale-[1.5] scale-[1]" : "lg:scale-[2.5] scale-[1.3]"
        }`}
      >
        <h1 className=" mx-auto w-[80%] text-center font-montserrat font-bold text-[2rem] md:text-[1.5rem] text-slate-900 leading-8 md:leading-6">{`
          Hi ! welcome to my portfolio
          `}</h1>
      </div>
      <p
        className={`font-outfit text-gray-700 font-semibold absolute left-1/2 -translate-x-1/2 bottom-1/4 duration-300 ${
          !move ? "opacity-0" : "opacity-100"
        }`}
      >
        Andika Rafli | Frontend Dev
      </p>

      {/* garis pinggir */}
      <img
        src="/LINE.svg"
        alt=""
        className={`absolute right-6 top-1/2 duration-300 ease-out h-[100hv] ${
          move ? "-translate-y-1/2" : "translate-y-[500px]"
        }`}
      />

      {/* medsos */}
      <div className="flex gap-[1px] absolute top-10 right-10">
        <a href="https://www.instagram.com/dikaaa.js/" target="_blank">
          <img
            src="/instagram.svg"
            className="w-[40px] p-[10px] rounded-full bg-slate-200"
            alt=""
          />
        </a>
        <a
          href="https://www.linkedin.com/in/andika-rafli-7311a4248/"
          target="_blank"
        >
          <img
            src="/linkedin.svg"
            className="w-[40px] p-[10px] rounded-full bg-slate-200"
            alt=""
          />
        </a>
      </div>

      <KiriAtas text="Home.js" move={move} />
    </section>
  );
}

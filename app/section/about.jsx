"use client";

import { useEffect, useRef, useState } from "react";
import KiriAtas from "../components/KiriAtas";

export default function About() {
  const [move, setMove] = useState(false);
  const aboutRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setMove(entry.isIntersecting);
      },
      { threshold: 0.5 } // Anda dapat menyesuaikan nilai ambang sesuai kebutuhan
    );

    observer.observe(aboutRef.current);

    // Membersihkan observer saat komponen dilepas
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="h-screen relative" ref={aboutRef}>
      {/* headline */}
      <KiriAtas text="About.js" move={move} />

      {/* garis pinggir */}
      <img
        src="/LINE.svg"
        alt=""
        className={`absolute right-6 top-1/2 duration-300 ease-out h-[100hv] ${
          move ? "-translate-y-1/2" : "-translate-y-[500px]"
        }`}
      />

      <img
        src="/about-kiri-bawah.svg"
        className={`absolute bottom-14 left-1/2 -translate-x-1/2 duration-300 ${
          move ? "translate-y-0 opacity-100" : "translate-y-[100px] opacity-0"
        }`}
      />

      <div className="top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 absolute w-[90%] md:w-[70%]">
        <h1
          className={`mx-auto w-[80%] py-[20px] text-center font-montserrat font-extrabold text-[2rem] md:text-[5rem] text-slate-950 leading-8 md:leading-6 duration-700 ${
            move ? "scale-100" : "scale-0"
          }`}
        >
          Tech Stack
        </h1>

        <div className="grid grid-cols-2 gap-3">
          {/* frontend */}
          <div
            className={`bg-black rounded-md px-5 py-5 duration-300 ease-out ${
              move ? "-translate-x-[0px]" : "-translate-x-[1000px]"
            }`}
          >
            <h5 className="text-white text-montserrat text-[.8rem] md:text-[1rem]">
              frontend :
            </h5>
            <div className="flex flex-wrap gap-5 py-[20px] items-center">
              <img
                src="/tech-stack/tailwind.svg"
                className="w-[23px] md:w-[30px]"
                alt=""
              />
              <img
                src="/tech-stack/nextjs.svg"
                className="w-[23px] md:w-[30px]"
                alt=""
              />
              <img
                src="/tech-stack/react.svg"
                className="w-[23px] md:w-[30px]"
                alt=""
              />
              <img
                src="/tech-stack/laravel.png"
                className="w-[23px] md:w-[30px]"
                alt=""
              />
            </div>
          </div>

          {/* backend */}
          <div
            className={`bg-black rounded-md px-5 py-5 duration-500 ease-out ${
              move ? "-translate-x-[0px]" : "-translate-x-[1500px]"
            }`}
          >
            <h5 className="text-white text-montserrat text-[.8rem] md:text-[1rem]">
              backend :
            </h5>
            <div className="flex flex-wrap gap-5 py-[20px] items-center">
              <img
                src="/tech-stack/nextjs.svg"
                className="w-[23px] md:w-[30px]"
                alt=""
              />
              <img
                src="/tech-stack/express-js.png"
                className="w-[23px] md:w-[30px]"
                alt=""
              />
              <img
                src="/tech-stack/mongodb.svg"
                className="w-[23px] md:w-[30px]"
                alt=""
              />
              <img
                src="/tech-stack/laravel.png"
                className="w-[23px] md:w-[30px]"
                alt=""
              />
            </div>
          </div>
        </div>

        <div
          className={`w-full rounded-md bg-black py-2 px-5 mt-[20px] duration-500 ${
            move ? "opacity-100" : "opacity-0"
          }`}
        >
          <h5 className="text-white text-montserrat text-center text-[1.5rem] font-bold">
            about me
          </h5>
          <p className="text-white text-outfit text-opacity-50 text-[.8rem]">
            I am a Front-End Developer with expertise in UI development, API
            consumption, and various aspects of web and mobile application
            development. I have extensive experience working with frameworks
            like Next.js, Vue, and Flutter to build responsive and
            high-performance applications. Additionally, I have a basic
            understanding and experience in API development. I am always eager
            to learn the latest technologies and apply them to projects to
            achieve optimal results.
          </p>
        </div>
      </div>
    </section>
  );
}

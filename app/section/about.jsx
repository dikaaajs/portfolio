"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
  const [active, setActive] = useState("about me");
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
      {/* bg */}
      <img
        src="/persona-bg.jpg"
        className="absolute w-full h-full -z-50"
        alt=""
      />

      {/* headline */}
      <div className="pt-[50px] pl-[20px] flex gap-[10px] items-center text-white z-20">
        <img src="/putih-kiriatas.svg" alt="" />
        <h1 className={`font-outfit font-medium text-[1.3rem]`}>About.js</h1>
      </div>

      {/* nav */}
      {/* <div className="text-slate-200 w-fit ml-[20px] mt-[20px] font-outfit">
        <ul>
          <li
            className={`list-about ${
              active === "about me" ? "list-about-active" : ""
            }`}
            onClick={() => setActive("about me")}
          >
            about me
          </li>
          <li
            className={`list-about ${
              active === "education" ? "list-about-active" : ""
            }`}
            onClick={() => setActive("education")}
          >
            education
          </li>
        </ul>
      </div> */}

      <img
        src="/LINE-white.svg"
        alt=""
        className={`absolute right-6 transform top-1/2 -translate-y-1/2 duration-700 ease-out ${
          !move ? "h-0" : "h-[100hv]"
        }`}
      />

      <img
        src="/ngecit.svg"
        className={`lg:mt-[5%] mt-[5px] scale-[.8] lg:scale-90 xl:scale-100 ml-[10px]`}
        alt=""
      />

      {/* <div className="relative w-full xl:w-[80%] h-[200px] mt-[10%]">
        <img
          src="/about-persona.svg"
          className={`absolute top-0 2xl:left-[10%]`}
          alt=""
        />
        <img
          src="about-dialog.svg"
          className={`absolute top-[80%] left-[30%]`}
        />
        <img
          src="/about-nama.svg"
          className={`absolute top-[50%] left-[25%]`}
          alt=""
        />
        <img
          src="/about-dialog2.svg"
          className={`absolute top-[80%] right-[15%] -z-10`}
          alt=""
        />
      </div> */}
    </section>
  );
}

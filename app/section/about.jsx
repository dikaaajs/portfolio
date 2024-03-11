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
    <section className="h-screen bg-black relative" ref={aboutRef}>
      {/* headline */}
      <div className="pt-[50px] pl-[20px] flex gap-[10px] items-center text-white">
        <img src="/putih-kiriatas.svg" alt="" />
        <h1 className={`font-outfit font-medium text-[1.3rem]`}>about.js</h1>
      </div>

      {/* nav */}
      <div className="text-slate-200 w-fit ml-[20px] mt-[20px] font-outfit">
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
          <li
            className={`list-about ${
              active === "repository" ? "list-about-active" : ""
            }`}
            onClick={() => setActive("repository")}
          >
            repository
          </li>
        </ul>
      </div>

      <img
        src="/LINE-white.svg"
        alt=""
        className={`absolute right-6 transform top-1/2 -translate-y-1/2 duration-700 ease-out ${
          !move ? "h-0" : "h-[100hv]"
        }`}
      />

      {/* about me */}
      {active === "about me" && (
        <>
          <div
            className={`py-[20px] px-[20px] bg-white w-[50%] font-outfit rounded-[5px] absolute transform -translate-x-1/2 left-1/2 pt-[80px] ${move}`}
          >
            <div className="absolute -top-[40px] left-[40px] flex gap-[10px] items-center">
              <img
                src="/me.jpg"
                className="w-[100px] shadow-[5px_5px_0px_0px_rgba(109,40,217)] rounded-[3px] "
                alt=""
              />
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Excepturi fuga ad, labore, cum quaerat commodi iusto in sed
              possimus placeat quidem ipsam a doloremque hic et earum nostrum
              quibusdam cupiditate.
            </p>
          </div>
        </>
      )}

      {active === "repository" && (
        <div>
          <h1></h1>
        </div>
      )}
    </section>
  );
}

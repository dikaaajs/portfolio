"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const dataRepo = [
  {
    headline: "Election of osis II",
    tag: ["next js", "mongodb", "fullstack"],
    p: "Website for voting for the new student council president. (source code is private)",
    date: "10/06/2024",
    img: "/osis.png",
    repo: "https://github.com/dikaaajs/valoin",
    teachStack: ["mongodb", "nextjs", "tailwind"],
  },
  {
    headline: "valoin - website for find lineup valorant",
    tag: ["next js", "mongodb", "fullstack"],
    p: "Simply put, this website is useful for helping Valorant game players. You can check the details on the button below",
    date: "01/01/2023",
    img: "/valoin.png",
    repo: "https://github.com/dikaaajs/valoin",
    teachStack: ["mongodb", "nextjs", "tailwind"],
  },
  {
    headline: "Election Of Osis I",
    tag: ["react js", "mongodb", "express js"],
    p: "Website for voting for the new student council president.",
    date: "13/08/2023",
    img: "/pemilihan.png",
    repo: "https://github.com/dikaaajs/voting-ketos-ui",
    teachStack: ["tailwind", "mongodb", "express"],
  },
  {
    headline: "Web App Attendance",
    tag: ["react js", "mysql", "express js"],
    p: "A website that specialize for taking attendance for an event",
    date: "06/08/2023",
    img: "/absensi.png",
    repo: "https://github.com/dikaaajs/absensi2",
    teachStack: ["react", "tailwind", "mongodb"],
  },
  {
    headline: "Software for GAUSS",
    tag: ["react js", "mongodb", "teamwork"],
    p: "A software to display output from a tool called GAUSS. This web will manage some data from GAUSS into data that can be eas to read.",
    date: "18/04/2023",
    img: "/gaus.png",
    repo: "https://github.com/dikaaajs/gauss-build",
    teachStack: ["react", "mongodb", "express"],
  },
  {
    headline: "Company profile web",
    tag: ["react js", "mongodb", "teamwork"],
    p: "My first company website that was made without using a framework and only using html, css, and javascript only",
    date: "26/09/2022",
    img: "/ktresna.png",
    repo: "https://github.com/dikaaajs/K-Tresna",
    teachStack: ["html", "css", "js"],
  },
];

export default function Repo() {
  const [active, setActive] = useState("about me");
  const [move, setMove] = useState(false);
  const aboutRef = useRef();
  const [activeRepo, setactiveRepo] = useState(0);

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
      <div className="pt-[50px] pl-[20px] flex gap-[10px] items-center text-white">
        <img src="/main-kiriatas.svg" alt="" />
        <h1 className={`font-outfit font-medium text-[1.3rem] text-black`}>
          Repository.js
        </h1>
      </div>

      {/* absolute */}
      <img
        src="/LINE-white.svg"
        alt=""
        className={`absolute right-6 transform top-1/2 -translate-y-1/2 duration-700 ease-out ${
          !move ? "h-0" : "h-[100hv]"
        }`}
      />
      <img
        src="/Vector 2 (1).svg"
        className="opacity-70 absolute lg:left-[-100px] lg:bottom-[80px] xl:bottom-[100px] left-[-40px] bottom-0 z-10 lg:w-fit lg:h-[350px] h-[250px] xl:h-[500px]"
      />

      {/* navigasi */}
      <nav className="flex justify-center pt-[30px] gap-[10px] absolute bottom-[100px] transform left-1/2 -translate-x-1/2">
        {dataRepo.map((i, idx) => {
          return (
            <button
              key={idx}
              onClick={() => setactiveRepo(idx)}
              className={`w-[20px] h-[20px]  rounded-full border-[4px] ${
                activeRepo === idx
                  ? "border-zinc-500 bg-[#BBFF1A]"
                  : "border-black bg-slate-600"
              } `}
            ></button>
          );
        })}
      </nav>

      <div className="relative">
        {/* repository */}
        <div className="flex gap-[20px] lg:mt-[10%] lg:mx-[100px] mx-[40px] mt-[60px]">
          {/* nomor */}
          <div className="absolute font-impact font-extrabold lg:right-[100px] lg:top-[-100px] top-[0px] right-[0px] lg:leading-[45px] xl:leading-[60px] leading-[30px] text-right">
            <h1 className="text-[1rem] lg:text-[1.8rem] xl:text-[2rem] uppercase">
              project
            </h1>
            <h1 className="text-[1.5rem] lg:text-[4rem] xl:text-[5rem]">
              0{activeRepo + 1}
            </h1>
          </div>

          {/* image */}
          <div className="flex flex-col gap-[20px] ">
            <div className="lg:w-[400px] xl:w-[500px] lg:h-[250px] xl:h-[300px] w-[250px] h-[150px] relative rounded-[20px] bg-white overflow-hidden z-20">
              <img src={`${dataRepo[activeRepo].img}`} className="w-full" />
              <p className="absolute bottom-0 z-50 bg-zinc-800 text-[#ffffff83] text-[.7rem] lg:text-[1rem] text-center font-impact font-bold italic w-full lg:py-[5px] py-[2px]">
                {dataRepo[activeRepo].headline}
              </p>
            </div>
          </div>

          {/* detail */}
          <div className="flex flex-col gap-[10px] justify-center flex-wrap text-[.7rem] lg:text-[1rem] xl:text-xl">
            {/* tag */}
            <div className="flex !justify-start gap-[20px] font-outfit">
              {dataRepo[activeRepo].tag.map((i, idx) => {
                return (
                  <p
                    className="py-[8px] px-[12px] bg-black text-white rounded-[9px]"
                    key={idx}
                  >
                    {i}
                  </p>
                );
              })}
            </div>

            {/* desk */}
            <div className="flex flex-col gap-5">
              <p className="font-medium">{dataRepo[activeRepo].p}</p>
              <Link
                href={dataRepo[activeRepo].repo}
                target="_blank"
                className="py-2.5 flex items-center gap-[5px] font-outfit px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 w-fit"
              >
                Repository{" "}
                <img src="github.png" className="w-5 inline" alt="" />
              </Link>
            </div>
          </div>

          {/* tech stack */}
          <div className="absolute bottom-0 right-0">
            <div className="bg-slate-950 py-3 px-[30px] border-[1px] border-r-0 border-slate-400 rounded-tl-[10px] rounded-bl-[10px] flex gap-[30px]">
              {dataRepo[activeRepo].teachStack.map((i, idx) => {
                return <img src={`${i}.svg`} key={idx} className="w-7" />;
              })}
            </div>
            <p className="text-center font-medium text-sm text-gray-500">
              teach stack
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

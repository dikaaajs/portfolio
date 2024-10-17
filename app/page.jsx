"use client";

import { useEffect, useState } from "react";
import Main from "./section/main";
import About from "./section/about";
import Repo from "./section/repo";
import Contact from "./section/contact";
import Tutorial from "./components/Tutorial";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
      {/* {warning && (
        <div className="w-full h-full fixed backdrop-blur-sm bg-white/30 z-40 inset-0">
          <div className="fixed w-[90%] py-[70px] md:w-[50%] bg-white rounded-md top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 backdrop-brightness-50">
            <h1 className="text-black font-impact uppercase font-bold text-[1.5rem] text-center">
              phone detected
            </h1>
            <p className="text-center font-outfit">
              this website is not compatible for mobile. use website with mobile
              responsive
            </p>
            <a
              className="font-outfit py-[3px] px-[10px] bg-blue-500 text-white rounded-md mx-auto w-fit block"
              href="https://dikaaajs.github.io/"
            >
              go
            </a>
          </div>
        </div>
      )} */}

      {/* tutorial */}
      <Tutorial dialog={dialog} warning={warning} setDialog={setDialog} />

      {/* navbar */}
      <Navbar setSection={setSection} dialog={dialog} section={section} />

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

      <Footer />
    </div>
  );
}

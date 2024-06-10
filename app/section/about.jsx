"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
  const [fukaDialog, setFukaDialog] = useState(true);
  const [dialogPick, setDialogPick] = useState(0);
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
    <section className="h-screen bg-black" ref={aboutRef}>
      <div className="h-[85%] w-full bg-white relative top-1/2 -translate-y-1/2">
        {/* background */}
        <img
          src="about/bg.jpg"
          className="w-full h-full absolute z-10"
          alt="background persona dialog"
        />

        {/* fuka dialog */}
        <div
          className={`w-[30%] h-full relative ml-auto delay-300 ${
            fukaDialog ? "" : "hidden"
          }`}
        >
          <img
            src="about/fuka.png"
            className={`absolute right-0 bottom-0 duration-300 z-20 ${
              !move ? "translate-x-1/2" : "translate-x-0"
            }`}
            alt=""
          />

          {/* options */}
          <button>
            <img
              src="about/option 1.svg"
              className="absolute bottom-[10%] -left-[90%] z-20 hover:scale-105 duration-300"
              onClick={() => {
                setFukaDialog(!fukaDialog);
                setMove(false);
                setDialogPick(1);
              }}
            />
          </button>
          <button>
            <img
              src="about/option 2.svg"
              className="absolute bottom-[17%] scale-75 -left-[80%] z-10 hover:scale-90 duration-300"
              onClick={() => {
                setFukaDialog(!fukaDialog);
                setMove(false);
                setDialogPick(2);
              }}
            />
          </button>
        </div>

        {/* dialog gwe */}
        {!fukaDialog && (
          <div
            onClick={() => {
              setFukaDialog(true);
              setDialogPick(0);
              setMove(true);
            }}
            className="cursor-pointer w-full h-full z-50"
          >
            <p className="text-white z-50 absolute bottom-2 left-1/2 -translate-x-1/2 text-center font-nato-sans">
              tap anywhere to continue
            </p>

            {dialogPick === 2 && (
              <img
                src="about/dialog2.svg"
                className="w-[80%] absolute bottom-3 left-1/2 -translate-x-1/2 z-20"
                alt=""
              />
            )}
            {dialogPick === 1 && (
              <img
                src="about/dialog1.svg"
                className="w-[80%] absolute bottom-3 left-1/2 -translate-x-1/2 z-20"
                alt=""
              />
            )}
          </div>
        )}
      </div>
    </section>
  );
}

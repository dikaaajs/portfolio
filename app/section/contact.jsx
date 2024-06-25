import React, { useEffect, useRef, useState } from "react";
import KiriAtas from "../components/KiriAtas";

export default function Contact() {
  const [move, setMove] = useState(false);
  const contactRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setMove(entry.isIntersecting);
      },
      { threshold: 0.5 } // Anda dapat menyesuaikan nilai ambang sesuai kebutuhan
    );

    observer.observe(contactRef.current);

    // Membersihkan observer saat komponen dilepas
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div className="h-screen relative" ref={contactRef}>
      <KiriAtas text={"Contact.js"} move={move} />

      <div
        className={`dark w-full max-w-sm pt-10 border z-10 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 relative duration-700 ease-out ${
          move ? "scale-100" : "scale-0"
        }`}
      >
        <img
          src="/email.svg"
          className={`absolute -top-[40px] -left-[40px] duration-300 ${
            move ? "translate-x-0 opacity-100" : "translate-x-[500px] opacity-0"
          }`}
        />
        <div className="flex flex-col items-center pb-10">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src="/me.jpg"
          />
          <h5 className="mb-1 text-xl font-medium font-montserrat text-gray-900 dark:text-white">
            andika rafli
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400 font-rethink">
            web developer
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400 font-rethink">
            zoneandika@gmail.com
          </span>
        </div>
      </div>
    </div>
  );
}

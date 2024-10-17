import React, { useState, useEffect } from "react";
import "./Preloader.css";

const Preloader = () => {
  const greetings = [
    "નમસ્તે",
    "Hello",
    "स्वागत है",
    "Bella",
    "Bienvenue",
    "Bonjour",
    "Hola",
    "Ciao",
    "Willkommen",
  ];

  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const greetingInterval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 200);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearInterval(greetingInterval);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black text-white transition-all duration-1000 ${
        !isLoading ? "swipe-up" : ""
      }`}
    >
      <div className="text-5xl mb-4 loader-dot">•</div>
      <div className="text-2xl">{greetings[currentGreeting]}</div>
    </div>
  );
};

export default Preloader;

"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      const timeout = setTimeout(() => setAnimate(false), 800);
      return () => clearTimeout(timeout);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <a
      href="https://wa.me/5531984742155"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-4 right-4 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-darkTurquoise-400 text-darkTurquoise-100 shadow-lg transition-transform ${
        animate ? "animate-wiggle" : ""
      }`}
    >
      <FaWhatsapp size={28} />
    </a>
  );
}

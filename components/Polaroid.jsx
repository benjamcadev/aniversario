import React from "react";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: "400",
});

const Polaroid = ({ src, caption }) => {
  return (
    <div className="relative w-96">
      {/* Cinta adhesiva superior izquierda */}
      <div className="absolute -top-2 -left-2 w-12 h-4 bg-yellow-300 rotate-[-15deg] shadow-sm opacity-80 z-10"></div>
      {/* Cinta adhesiva superior derecha */}
      <div className="absolute -top-2 -right-2 w-12 h-4 bg-yellow-300 rotate-[15deg] shadow-sm opacity-80 z-10"></div>

      {/* Polaroid */}
      <div className="bg-white shadow-lg rounded-sm pb-6 pt-2 px-2 text-center z-0 relative transform hover:-rotate-2 transition-all duration-300">
        <div className="aspect-[3/4] overflow-hidden border border-gray-300">
          <img
            src={src}
            alt={caption}
            className="w-full h-full object-cover"
          />
        </div>
        <p className={`mt-2 text-lg text-gray-600 italic ${caveat.className}`}>
          {caption}
        </p>
      </div>
    </div>
  );
};

export default Polaroid;

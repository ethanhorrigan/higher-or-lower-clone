"use client";
import React from "react";

interface VsComponentProps {
  guessed?: boolean;
  guess?: boolean;
}

export default function VsComponent({ guess, guessed }: VsComponentProps) {
  const getBackgroundColor = () => {
    if (!guessed) {
      return "bg-white";
    } else if (guess) {
      return "bg-green-500";
    } else {
      return "bg-red-500";
    }
  };

  return (
    <div
      className={`flex items-center justify-center rounded-full text-neutral-700 text-3xl font-bold h-[6.25rem] w-[6.25rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[9999]
      transition-colors duration-500
      ${getBackgroundColor()}`}
    >
      VS
    </div>
  );
}

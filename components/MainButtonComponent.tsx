import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function MainButtonComponent() {
  return (
    <div>
      <button
        className="
        flex
        justify-center
        rounded-md
        px-3
        py-2
        text-sm
        font-semibold
      "
      >
        <span>Start Game</span>
        <FaArrowRight className="inline-block ml-9" />
      </button>
    </div>
  );
}

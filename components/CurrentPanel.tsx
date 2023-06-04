// currentpanel.tsx
"use client";
import { ImageItem } from "@/types/imageitem";
import React from "react";
import GameButton, { Choices } from "./GameButton";


interface CurrentPanelProps {
  poisition?: "left" | "right";
  data: ImageItem;
  vote?: string | null;
  setVote?: React.Dispatch<React.SetStateAction<string | null>>;
}

const CurrentPanel: React.FC<CurrentPanelProps> = ({ poisition, data, vote, setVote }) => {

  const voteHigher = () => {
    if (setVote) {
      setVote(Choices.HIGHER);
    }
  };

  const voteLower = () => {
    if (setVote) {
      setVote(Choices.LOWER);
    }
  };

  const isCorrect = data.correct ? "-green-500" : "-black";

  return (
    <div
      className={`flex flex-col text-white justify-center items-center bg-center bg-cover w-full h-[100vh] relative border${isCorrect} border-4`}
      style={{ backgroundImage: `url(${data.coverImage})` }}
    >
      <div className="bg-black opacity-[0.5] h-full w-full absolute"></div>
      <div className="flex flex-col gap-[10px] z-[999] text-center items-center">
        <h1 className="text-6xl  text-white">{data?.name}</h1>
        {poisition === "left" && (
          <div>
            <span className="text-2xl">is searched</span>
            <h2 className="pt-2 text-7xl text-yellow-300">
              {data?.popularity.toLocaleString()}
            </h2>
          </div>
        )}
        {poisition === "right" && (
          <div className="flex flex-col justify-between">
            <span className="text-2xl">has</span>
            <GameButton option="Higher" onClick={voteHigher} />
            <GameButton option="Lower" onClick={voteLower} />
            <span className="text-2xl mt-4">searches than</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CurrentPanel;

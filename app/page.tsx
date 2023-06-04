"use client";

import CurrentPanel from "@/components/CurrentPanel";
import { Choices } from "@/components/GameButton";
import VsComponent from "@/components/VsComponent";
import { ImageItem } from "@/types/imageitem";
import React, { useState } from "react";

const imageItem: ImageItem = {
  name: "Cristiano Ronaldo",
  popularity: 1000000,
  coverImage: "/ronaldo.jpg",
  correct: false,
};

const imageItem2: ImageItem = {
  name: "Haaland",
  popularity: 1100000,
  coverImage: "/haaland.jpg",
  source:
    "https://en.wikipedia.org/wiki/Erling_Haaland#/media/File:Erling_Haaland_2023_(cropped-v2).jpg",
  correct: true,
};

const imageItem3: ImageItem = {
  name: "Lionel Messi",
  popularity: 1200000,
  coverImage: "/messi.jpg",
  source:
    "https://en.wikipedia.org/wiki/Lionel_Messi#/media/File:Lionel_Messi_2023.jpg",
  correct: false,
};

const imageItem4: ImageItem = {
  name: "Kylian Mbappe",
  popularity: 1050000,
  coverImage: "/mbappe.jpg",
  source:
    "https://en.wikipedia.org/wiki/Kylian_Mbapp%C3%A9#/media/File:Kylian_Mbappe_2023.jpg",
  correct: true,
};

const imageItem5: ImageItem = {
  name: "Neymar",
  popularity: 950000,
  coverImage: "/neymar.jpg",
  source: "https://en.wikipedia.org/wiki/Neymar#/media/File:Neymar_2023.jpg",
  correct: false,
};

const imageItem6: ImageItem = {
  name: "Mohamed Salah",
  popularity: 900000,
  coverImage: "/salah.jpg",
  source:
    "https://en.wikipedia.org/wiki/Mohamed_Salah#/media/File:Mohamed_Salah_2023.jpg",
  correct: true,
};

enum GameStates {
  START,
  LOADING,
  PLAYING,
  FINISHED,
}

export default function Home() {
  const [gameState, setGameState] = useState<GameStates>(GameStates.START);
  const [control, setControl] = useState<ImageItem>();
  const [choice, setChoice] = useState<ImageItem>();
  const [vote, setVote] = useState<string | null>(null);
  const [score, setScore] = useState<number>(0);
  const [highScore, setHighScore] = useState<number>(0);

  function startGame() {
    setScore(0);
    setGameState(GameStates.PLAYING);
    setControl(imageItem);
    setChoice(imageItem2);
  }

  const getVote = (vote: string, options: ImageItem[]): boolean | undefined => {
    switch (vote) {
      case Choices.HIGHER:
        return options[0].popularity > options[1].popularity;
      case Choices.LOWER:
        return options[0].popularity < options[1].popularity;
      default:
        return undefined;
    }
  };

  const handleVote = (vote: string) => {
    const isCorrect = getVote(vote, [control, choice]);
    if (isCorrect) {
      setScore(score + 1);
      setHighScore(Math.max(score + 1, highScore));
      return;
    }
    setControl(choice);
    setChoice(imageItem3);
    setVote(null);

    setGameState(GameStates.FINISHED);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen relative bg-gray-700">
      <CurrentPanel data={imageItem} poisition="left" />
      <VsComponent guessed={vote !== null} guess={getVote(vote || "")} />
      <CurrentPanel data={imageItem6} poisition="right" setVote={setVote} />

      <div className="absolute left-0 bottom-0 ml-8 mb-8 text-white text-3xl">
        <p>Score: {score}</p>
      </div>

      <div className="absolute right-0 bottom-0 mr-8 mb-8 text-white text-3xl">
        <p>Highscore: {highScore}</p>
      </div>
    </div>
  );
}

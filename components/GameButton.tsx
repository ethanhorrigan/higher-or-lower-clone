// GameButton component
import React from "react";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";

interface GameButtonProps {
  option: string;
  onClick?: () => void;
}

export enum Choices {
  HIGHER = "Higher",
  LOWER = "Lower",
}

export default function GameButton({ option, onClick }: GameButtonProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  const onHover = () => {
    setIsHovered(true);
  };

  const onLeave = () => {
    setIsHovered(false);
  };

  const iconColor = isHovered ? "text-neutral-700" : "text-white";
  const iconTranslate = isHovered
    ? option === Choices.HIGHER
      ? "transform -translate-y-1"
      : "transform translate-y-1"
    : "";

  return (
    <button
      onClick={onClick}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="
      flex
      flex-row
      justify-center
      items-center
      bg-transparent
      border-4
      px-2
      py-3
      mt-4
      w-[12.5rem]
      text-yellow-200
      font-bold
      border-solid
      border-white
      rounded-full
      hover:bg-white
      hover:text-neutral-700
      transition
      duration-800
      "
    >
      {option}
      {option === Choices.HIGHER ? (
        <AiOutlineCaretUp className={`ml-2 ${iconColor} ${iconTranslate}`} />
      ) : (
        <AiOutlineCaretDown className={`ml-2 ${iconColor} ${iconTranslate}`} />
      )}
    </button>
  );
}

export interface ImageItem {
  name: string;
  popularity: number;
  coverImage: string;
  correct?: boolean;
  source?: string;
}

// Path: types\game.d.ts
export interface Game {
  id: string;
  name: string;
  description: string;
  coverImage: string;
  choices: Choices;
  items: ImageItem[];
  score: number;
  highScore: number;
  currentRound: number;
  totalRounds: number;
  isGameStarted: boolean;
  isGamePaused: boolean;
  isGameLoading: boolean;
  isGameFinished: boolean;
  isGameReset: boolean;
  isGameRestart: boolean;
}
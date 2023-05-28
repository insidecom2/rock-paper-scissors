export const PLAY_ACTION = {
  SCISSORS: "Scissors",
  ROCK: "Rock",
  PAPER: "Paper",
  EMPTY: "?",
} as const;

export const STATUS_PLAYING = {
  IDEL: "idel",
  PLAY: "play",
  BOTPLAY: "botplay",
} as const;

export const TIME = {
  SLEEP: 2000,
  HIGHSCORE: 3000,
};

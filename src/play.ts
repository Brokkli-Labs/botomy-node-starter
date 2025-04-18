import { LevelData, Move } from "../lib/types";

function play(levelData: LevelData): Move[] {
  const moves: Move[] = [];
  const ownPlayer = levelData.own_player;
  const players = levelData.players;
  const items = levelData.items;
  const enemies = levelData.enemies;

  moves.push({ speak: "Hello Botomy!" });

  moves.push({
    debug_info: {
      message:
        "Congratulations! You have reached the play function. Modify this file (src/play.ts) to implement your bot's logic.",
    },
  });

  return moves;
}
export default play;

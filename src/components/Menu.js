import React, { useRef } from "react";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";

export default function Menu() {
  const { gameState, setGameState, userName, setUserName } =
    useContext(GameStateContext);

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      ></input>
      <button
        onClick={() => {
          setGameState("playing");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}

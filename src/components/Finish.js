import React from "react";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";
import { Questions } from "./Questions";

export default function Finish() {
  const { gameState, setGameState, userName, setUserName, score, setScore } =
    useContext(GameStateContext);

  const restart = () => {
    setScore(0);
    setUserName("");
    setGameState("menu");
  };

  return (
    <>
      Finish
      <h1>
        {score} / {Questions.length}
      </h1>
      <h2>{userName}</h2>
      <button onClick={restart}>Restart</button>
    </>
  );
}

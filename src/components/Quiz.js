import React, { useState } from "react";
import { Questions } from "./Questions";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";

const Quiz = () => {
  const [currentQuestion, setCuurentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const { score, setScore, gameState, setGameState } =
    useContext(GameStateContext);

  const chooseOption = (option) => {
    setOptionChosen(option);
  };

  const nextQuestion = () => {
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setCuurentQuestion(currentQuestion + 1);
  };

  const finishQuiz = () => {
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setGameState("finish");
  };

  return (
    <div>
      <h1>{Questions[currentQuestion].prompt}</h1>
      <button
        onClick={() => {
          chooseOption("optionA");
        }}
      >
        {Questions[currentQuestion].optionA}
      </button>
      <br />
      <button
        onClick={() => {
          chooseOption("optionB");
        }}
      >
        {Questions[currentQuestion].optionB}
      </button>
      <br />
      <button
        onClick={() => {
          chooseOption("optionC");
        }}
      >
        {Questions[currentQuestion].optionC}
      </button>
      <br />
      <button
        onClick={() => {
          chooseOption("optionD");
        }}
      >
        {Questions[currentQuestion].optionD}
      </button>
      <br />
      {currentQuestion === Questions.length - 1 ? (
        <button onClick={finishQuiz}>Finish</button>
      ) : (
        <button onClick={nextQuestion}>Next</button>
      )}
    </div>
  );
};

export default Quiz;

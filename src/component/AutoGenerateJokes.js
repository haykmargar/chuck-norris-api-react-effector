import React from "react";
import {useState} from "react";
import {fetchRandomJoke} from "../store/effector";
import {Button} from "./styles/Button.style";

export default function AutoGenerateJokes() {

  const [autoGenerateMode, setAutoGenerateMode] = useState(false);
  const [timeOutHandler, setTimeOutHandler] = useState(0);
  const [autoGenerateButtonHandler, setAutoGenerateButtonHandler] = useState("Autogenerate jokes");

  const handleNextJoke = () => {
    fetchRandomJoke().catch(err => console.log(err));
  };
  const autoGenerateJokes = () => {
    if (!autoGenerateMode) {
      setTimeOutHandler(setInterval(handleNextJoke, 3000));
      setAutoGenerateButtonHandler("Autogenerating jokes");
    } else {
      clearInterval(timeOutHandler);
      setAutoGenerateButtonHandler("Autogenerate jokes");
    }
    setAutoGenerateMode(!autoGenerateMode);
  };

  return (
    <Button onClick={autoGenerateJokes}>{autoGenerateButtonHandler}</Button>
  );
};
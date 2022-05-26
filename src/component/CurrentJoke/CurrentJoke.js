import * as React from "react";
import {useNavigate} from "react-router-dom";
import {useStore} from "effector-react";

import {currentJoke} from "../../store/store";
import {fetchRandomJoke} from "../../store/effector";

import AutoGenerateJokes from "../AutoGenerateJokes";
import AddToFavorites from "../AddToFavorites";

import chuckNorris from "./chuck.png";
import {Button} from "../styles/Button.style";
import {Buttons} from "../styles/Buttons.style";
import {Image, Content, RandomJoke} from "./CurrentJokeSt.style";

export const CurrentJoke = () => {
  const joke = useStore(currentJoke);
  const navigate = useNavigate();

  const randomJokeHandler = () => {
    fetchRandomJoke().catch(err => console.log(err));
  };

  return (
    <div>
      <Buttons>
        <Button onClick={randomJokeHandler}>Random Joke</Button>
        <AddToFavorites />
        <AutoGenerateJokes />
        <Button onClick={() => navigate("./favorites")}>Favorite Jokes</Button>
      </Buttons>
      <Content>
        <RandomJoke>{joke.value ?? "Quite a bad idea to joke about me!"}</RandomJoke>
        <Image src={chuckNorris} alt="Chuck Norris angry image" />
      </Content>
    </div>
  );
};

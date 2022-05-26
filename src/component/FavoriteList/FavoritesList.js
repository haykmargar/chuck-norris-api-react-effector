import * as React from "react";
import {useList} from "effector-react";
import {useNavigate} from "react-router-dom";

import {favoriteJokes} from "../../store/store";
import {FavoriteJoke} from "../FavoriteJoke/FavoriteJoke";
import {deleteFavorite, deleteFavorites} from "../../store/effector";

import {Button} from "../styles/Button.style";
import {Buttons} from "../styles/Buttons.style";
import {FavoritesListSt} from "./FavoritesListSt.style";

export const FavoritesList = () => {

  const navigate = useNavigate();
  const removeFromFavorites = (joke) => {
    deleteFavorite(joke.id);
  };
  const clearFavorites = () => {
    deleteFavorites();
  };

  return (<>
      <Buttons>
        <Button onClick={() => navigate("/")}>Go to Main Page</Button>
        <Button onClick={clearFavorites}>Clear Favorites</Button>
      </Buttons>
      <FavoritesListSt >
        {useList(favoriteJokes, (favoriteJoke, itemIndex) => (
          <FavoriteJoke
            value={favoriteJoke.value}
            deleteFavorite={() => removeFromFavorites(favoriteJoke)}
          />
        ))}
      </FavoritesListSt>
    </>
  );
};
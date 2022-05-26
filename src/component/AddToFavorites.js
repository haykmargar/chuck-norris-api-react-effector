import React from "react";
import {useState, useEffect} from "react";
import {addToFavorites, deleteFavorite} from "../store/effector";
import {useStore} from "effector-react";
import {currentJoke, favoriteJokes} from "../store/store";
import {Button} from "./styles/Button.style";

export default function AddToFavorites() {

  const buttonText ={
    add: 'Add to favorites',
    remove : 'Remove from favorites'
  }

  const favorite = useStore(favoriteJokes);
  const joke = useStore(currentJoke);

  const [addedToFavoritesHandler, setAddedToFavoritesHandler] = useState(buttonText.add);
  const [favJoke, setFavJoke] = useState({});

  useEffect(()=>{
    setAddedToFavoritesHandler(buttonText.add)
  },[joke])

  const addToFavoritesHandler = (favoriteJoke) => {
    if (!favoriteJoke.hasOwnProperty("id")) {
      return;
    }
    addToFavorites(favoriteJoke).catch(err => console.log(err));
    setFavJoke(favoriteJoke);
  };
  const removeFromFavorites = (id) => {
    deleteFavorite(id);
  };

  const addRemoveFavoritesHandler = () => {
    const el = favorite.find(el => el.id === joke.id);
    if (el) {
      removeFromFavorites(favJoke.id);
      setAddedToFavoritesHandler(buttonText.add)
    } else {
      addToFavoritesHandler(joke);
      setAddedToFavoritesHandler(buttonText.remove);
    }
  };

  return (
    <Button onClick={() => {
      addRemoveFavoritesHandler();
    }} >{addedToFavoritesHandler}
    </Button>);
};
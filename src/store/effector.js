import {createEffect, createEvent} from "effector";
import {currentJoke, favoriteJokes} from "./store";

export const deleteFavorite = createEvent("delete favorite");
export const deleteFavorites = createEvent("delete favorites");

export const fetchRandomJoke = createEffect();
export const addToFavorites = createEffect();

fetchRandomJoke.use(async () => {//effect handler
  const url = `https://api.chucknorris.io/jokes/random`;
  const req = await fetch(url);
  return req.json();
});

currentJoke.on(
  fetchRandomJoke.done,
  (_, resolvedValue) => resolvedValue.result,
);

currentJoke.watch(value => {
  console.log(value, "change");
});

addToFavorites.use(async (data) => {
  return data;
});

favoriteJokes
  .on(
    addToFavorites.done,
    (_, resolvedValue) => {
      if (_.length < 10) {
        return [..._, resolvedValue.result];
      } else {
        _.shift();
        return [..._, resolvedValue.result];
      }
    })
  .on(
    deleteFavorite,
    (state, id) => state.filter(e => e.id !== id),
  )
  .on(
    deleteFavorites, state => [],
  );

favoriteJokes.watch(value => {
  console.log(value, "favorites state");
});
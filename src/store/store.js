import {createStore} from "effector";
import connectLocalStorage from "effector-localstorage";

const favoritesLocalStorage = connectLocalStorage("favorites")
  .onError((err) => console.log(err)); // setup error callback

export const favoriteJokes = createStore(favoritesLocalStorage.init(0));
export const currentJoke = createStore([]);

export const favCount = favoriteJokes.map(favoriteJokes => `Favorite jokes: ${favoriteJokes.length}`);
favoriteJokes.watch(favoritesLocalStorage);
import * as React from "react";

import {FavoriteJokeSt} from "./FavoriteJoke.style";

export const FavoriteJoke = ({deleteFavorite, id, value}) => {
  return (
    <FavoriteJokeSt onClick={() => deleteFavorite(id)}>
      {value}
    </FavoriteJokeSt>
  );
};
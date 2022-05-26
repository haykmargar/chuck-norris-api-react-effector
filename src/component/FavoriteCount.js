import * as React from "react";
import {useStore} from "effector-react";

import {favCount} from "../store/store";

export const FavoriteCount = () => (
  <p className="favCount">{useStore(favCount)}</p>
);

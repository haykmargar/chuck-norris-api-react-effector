import * as React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {deleteFavorite} from "./store/effector";

import {CurrentJoke} from "./component/CurrentJoke/CurrentJoke";
import {FavoriteCount} from "./component/FavoriteCount";
import {FavoritesList} from "./component/FavoriteList/FavoritesList";

import {Header} from "./component/styles/Header.styled";
import {AppDiv} from "./component/styles/App.style";

function App() {

  return (
    <Router>
      <AppDiv>
        <Header>
          <h1>Chuck Norris jokes</h1>
          <FavoriteCount />
        </Header>
        <Routes>
          <Route path="/"
                 element={<><CurrentJoke deleteFavorite={deleteFavorite} /></>} />
          <Route path="/favorites"
                 element={<FavoritesList />} />
        </Routes>
      </AppDiv>
    </Router>
  );
}

export default App;
import React, { createContext, useState } from "react";
import GlobalStyle from "./globalStyles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import Files from "./pages/Files";
import User from "./pages/User";
import Tracks from "./pages/Tracks";
import LikedMusic from "./pages/LikedMusic";
import Settings from "./pages/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/favourites",
    element: <Favourites />,
  },
  {
    path: "/files",
    element: <Files />,
  },
  {
    path: "/tracks",
    element: <Tracks />,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "/liked",
    element: <LikedMusic />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
]);

export const FavouritesCtx = createContext();

function App() {
  const [fav, setFav] = useState([]);
  const [likes, setLikes] = useState([]);
  return (
    <div className="App">
      <FavouritesCtx.Provider value={{ fav, setFav, likes, setLikes }}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </FavouritesCtx.Provider>
    </div>
  );
}

export default App;

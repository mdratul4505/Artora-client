import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import ExploreArtworks from "../Pages/ExploreArtworks";
import Mainlayout from "../Layout/Mainlayout";
import AddArtwork from "../Pages/AddArtwork";
import MyGAalery from "../Pages/MyGAalery";
import Favorites from "../Pages/Favorites";
import Login from "../Pages/Login";
import SingnUp from "../Pages/SingnUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import { FadeLoader } from "react-spinners";
import CartDeatils from "../Components/CartDeatils";
import DataUpdate from "../Pages/DataUpdate";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Mainlayout,
    errorElement: <Error></Error>,
    hydrateFallbackElement: (
      <div className="min-h-screen flex justify-center items-center">
        <FadeLoader></FadeLoader>
      </div>
    ),
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("http://localhost:3000/latest-artworks")
      },

      {
        path: "/explore-artworks",
        Component: ExploreArtworks,
        loader: () => fetch("http://localhost:3000/explore-artworks"),
      },
      {
        path: "/explore-artworks/:id",
        element: (
          <PrivateRoute>
            <CartDeatils></CartDeatils>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/explore-artworks/${params.id}`),
      },

      {
        path: "/add-artwork",
        element: (
          <PrivateRoute>
            <AddArtwork></AddArtwork>
          </PrivateRoute>
        ),
      },

      {
        path: "/my-gallery",
        element: (
          <PrivateRoute>
            <MyGAalery></MyGAalery>
          </PrivateRoute>
        ),
      },

      {
        path: "/favorites",
        element: (
          <PrivateRoute>
            <Favorites></Favorites>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/signup",
        Component: SingnUp,
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <DataUpdate></DataUpdate>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/explore-artworks/${params.id}`),
      },
    ],
  },
]);

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




export const router = createBrowserRouter([
  {
    path: "/",
    Component:Mainlayout,
    errorElement:<Error></Error>,
    hydrateFallbackElement:<p>loading....</p>,
    children:[
        {
            index:true,
            Component:Home,
        },

        {
            path:"/explore",
            Component:ExploreArtworks,
        },

        {
            path:"/add-artwork",
            element:<AddArtwork></AddArtwork>
        },

        {
            path:"/my-gallery",
            element:<MyGAalery></MyGAalery>
        },

        {
            path:"/favorites",
            element:<Favorites></Favorites>
        },
        {
            path:"/login",
            Component:Login,
        },
        {
            path:"/signup",
            Component:SingnUp,
        },



    ]
  },

]);


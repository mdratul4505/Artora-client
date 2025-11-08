import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import ExploreArtworks from "../Pages/ExploreArtworks";
import Mainlayout from "../Layout/Mainlayout";




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
            path:"/explore-artworks",
            Component:ExploreArtworks,
        },



    ]
  },

]);


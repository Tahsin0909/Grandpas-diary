import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/> ,
      errorElement: <p>Error ...</p> ,
      children: [
        {
          path: "/",
          element: <Home/>
        }
      ]
    },
  ]);
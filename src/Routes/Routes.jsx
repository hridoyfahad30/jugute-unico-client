import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import AllToys from "../Pages/AllToys/AllToys/AllToys";
import Signin from "../Pages/Signin/Signin";
import Signup from "../Pages/Signup/Signup";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/alltoys',
          element: <AllToys></AllToys>
        },
        {
          path: '/signin',
          element: <Signin></Signin>
        },
        {
          path: '/signup',
          element: <Signup></Signup>
        }
      ]
    },
  ]);


  export default router;
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import AllToys from "../Pages/AllToys/AllToys/AllToys";
import Signin from "../Pages/Signin/Signin";
import Signup from "../Pages/Signup/Signup";
import Error from "../Pages/Error/Error";
import AddToy from "../Pages/AddToy/AddToy/AddToy";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <Error></Error>,
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
          path: 'addtoy',
          element: <AddToy></AddToy>
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
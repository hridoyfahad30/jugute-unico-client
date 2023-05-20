import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import AllToys from "../Pages/AllToys/AllToys/AllToys";
import Signin from "../Pages/Signin/Signin";
import Signup from "../Pages/Signup/Signup";
import Error from "../Pages/Error/Error";
import AddToy from "../Pages/AddToy/AddToy/AddToy";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import MyToys from "../Pages/MyToys/MyToys";
import UpdateToy from "../Pages/MyToys/UpdateToy";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <Error></Error>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: ()=> fetch('http://localhost:5000/toys')
        },
        {
          path: '/alltoys',
          element: <AllToys></AllToys>,
          loader: ()=> fetch('http://localhost:5000/toys')
        },
        {
          path: '/toy/:id',
          element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/toydetails/${params.id}`)
        },
        {
          path: '/mytoys',
          element: <MyToys></MyToys>
        },
        {
          path: 'addtoy',
          element: <AddToy></AddToy>
        },
        {
          path: '/toyUpdate/:id',
          element: <UpdateToy></UpdateToy>,
          loader: ({params}) => fetch(`http://localhost:5000/toydetails/${params.id}`)
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
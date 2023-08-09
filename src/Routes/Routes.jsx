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
import Blogs from "../Pages/Blogs/Blogs";
import About from "../Pages/About/About";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <Error></Error>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: ()=> fetch('https://toy-server-tau.vercel.app/toys')
        },
        {
          path: '/alltoys',
          element: <AllToys></AllToys>
        },
        {
          path: '/toy/:id',
          element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
          loader: ({params}) => fetch(`https://toy-server-tau.vercel.app/toydetails/${params.id}`)
        },
        {
          path: '/mytoys',
          element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
          path: 'addtoy',
          element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
        },
        {
          path: '/toyUpdate/:id',
          element: <UpdateToy></UpdateToy>,
          loader: ({params}) => fetch(`https://toy-server-tau.vercel.app/toydetails/${params.id}`)
        },
        {
          path: '/signin',
          element: <Signin></Signin>
        },
        {
          path: '/signup',
          element: <Signup></Signup>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },
        {
          path: '/about',
          element: <About></About>
        },
      ]
    },
  ]);


  export default router;
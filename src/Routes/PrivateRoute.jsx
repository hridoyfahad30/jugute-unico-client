/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className="col-span-3 my-8">
        <button className="btn w-full bg-green-600 text-white text-xl text-center loading">loading</button>
      </div>
    }

    if(user?.email){
        return children;
    }

    return <Navigate to='/signin' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;
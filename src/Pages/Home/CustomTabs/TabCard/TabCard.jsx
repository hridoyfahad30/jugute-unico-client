/* eslint-disable react/prop-types */
import { Rating } from "@smastrom/react-rating";
import React, { useContext } from "react";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Navigate, useNavigate } from "react-router-dom";

const TabCard = ({toy}) => {

  const {_id, photo, name, price, rating} = toy;
  const nevigate = useNavigate();

  const {user} = useContext(AuthContext);

  const handleViewDetails = (id) => {
    if(!user){
      Swal.fire({
        title: 'You have to log in first to view details',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: 'green',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK'
      }).then((result) => {
        if (result.isConfirmed) {
          nevigate(`/toy/${id}`)
        }
      })
    }
    else{
      nevigate(`/toy/${id}`)
    }
    
  }


  return (
    <div className="card w-96 glass hover:shadow-2xl hover:shadow-green-300 my-10 duration-300 mx-auto" data-aos="fade-up">
      <figure>
        <img
          className="h-56 w-full"
          src={photo}
          alt="car!"
        />
      </figure>
      <div className="card-body">
        <p className="text-3xl">{name}</p>
        <div className="card-actions justify-between my-3">
          <div className="badge badge-outline text-lg p-4">$ {price}</div>
          <div className="">
              <Rating style={{ maxWidth: 140 }} value={rating} readOnly />
            </div>
        </div>

        <div className="card-actions justify-center mt-4">

          <button onClick={()=>handleViewDetails(_id)} className="btn btn-ghost text-lg text-white bg-green-600 hover:bg-green-500">
          View Details 
        </button>
        
        </div>
      </div>
    </div>
  );
};

export default TabCard;

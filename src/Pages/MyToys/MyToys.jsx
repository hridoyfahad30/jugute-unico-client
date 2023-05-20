/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import MyToyTable from './MyToyTable';

const MyToys = () => {

    const {user} = useContext(AuthContext);
    const [myToys, setMyToys] = useState([])
    const nevigate = useNavigate();


    const url = `http://localhost:5000/myToys?email=${user?.email}`;

    useEffect(() => {
        fetch(url, {
          method: 'GET',
          headers: {
            authorization: `Bearer ${localStorage.getItem('toy-access-token')}` 
          }
        })
          .then((res) => res.json())
          .then((data) => {
            if(!data.error){
                setMyToys(data)
            }
            else{
              nevigate('/')
            }
            });
      }, [url]);



    return (
        <div>
      <div className="input-group">
        <input
          type="text"
          placeholder="Search by Toy Name…"
          className="input input-bordered"
        />
        <button className="btn btn-square bg-green-600 hover:bg-green-700">
          <FaSearch />
        </button>
      </div>

      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Seller</th>
                <th>Toy Name</th>
                <th>Sub-category</th>
                <th>Price</th>
                <th>Available Quantity</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {myToys.map((toy) => (
                <MyToyTable key={toy._id}  toy={toy}></MyToyTable>
              ))}
            </tbody>
            {/* foot */}
            <tfoot>
              <tr>
                <th>Seller</th>
                <th>Toy Name</th>
                <th>Sub-category</th>
                <th>Price</th>
                <th>Available Quantity</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

    </div>
    );
};

export default MyToys;
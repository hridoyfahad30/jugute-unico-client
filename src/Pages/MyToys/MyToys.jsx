/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import MyToyTable from "./MyToyTable";
import Swal from "sweetalert2";
import { PulseLoader } from "react-spinners";
import useTitle from "../../Utilitys/TitleFunction";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [searchText, setSearchText] = useState("");
  const nevigate = useNavigate();
  const [reactLoading, setReactLoading] = useState(false);
  useTitle('JUGUETE ÚNICO | MyToys');

  useEffect(() => {
    setReactLoading(true);
    setTimeout(() => {
      setReactLoading(false);
    }, 400);
  }, []);

  const url = `https://toy-server-tau.vercel.app/myToys?email=${user?.email}`;

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("toy-access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setMyToys(data);
        } else {
          nevigate("/");
        }
      });
  }, [url]);


  const handleSearch = () => {
    fetch(`https://toy-server-tau.vercel.app/toySearch/${searchText}`)
    .then(res => res.json())
    .then(data => setMyToys(data))
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "green",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-server-tau.vercel.app/myToys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = myToys.filter((toy) => toy._id !== id);
              setMyToys(remaining);
            }
          });
        
      }
    });
  };

  return (
    <>
      {
        reactLoading ? (
          <PulseLoader className="text-center mt-96" color="#36d7b7" />
        ) :
        
        <div className="container mx-auto mt-8">
        <div className="input-group">
          <input
          onChange={(e)=>setSearchText(e.target.value)}
            type="text"
            placeholder="Search by Toy Name…"
            className="input input-bordered"
          />
          <button onClick={handleSearch} className="btn btn-square bg-green-600 hover:bg-green-700">
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
                {
                  myToys.length == 0 ?

                  <button className="btn bg-green-600 loading my-4">loading</button>
                  :

              <> {myToys.map((toy) => (
                  <MyToyTable
                    key={toy._id}
                    toy={toy}
                    handleDelete={handleDelete}
                  ></MyToyTable>
                ))}
                </>
                }
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
      </div>}
    </>
  );
};

export default MyToys;

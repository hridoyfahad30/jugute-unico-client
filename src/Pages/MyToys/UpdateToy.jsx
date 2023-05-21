import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";

const UpdateToy = () => {
  const [brand, setBrand] = useState("");
  const [subcategory, setSubcategory] = useState("");

  const {user} = useContext(AuthContext);
  const toyDetails = useLoaderData();
  const { _id, photo, name, sellerName, price, rating, quantity, details } =
    toyDetails;

  const handleSubCategoryChange = (e) => {
    setSubcategory(e.target.value);
  };

  const handleUpdateToy = (e) => {
    e.preventDefault();

    const form = e.target;

    const price = form.price.value;
    const quantity = form.quantity.value;
    const details = form.details.value;

    const updatedToy = {
      
      price,
      quantity,
      details      
    };

    const options = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedToy),
    };

    fetch(`https://toy-server-tau.vercel.app/toy/${_id}`, options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response.modifiedCount > 0) {
          Swal.fire("Toy Updated Successfully");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl md:text-4xl text-center font-semibold text-green-600">
        Update Toy
      </h1>
      <form onSubmit={handleUpdateToy}>
        <div className="md:flex gap-10 items-center justify-center md:my-10 ">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl md:text-2xl">Toy Name:</span>
            </label>
            <label className="input-group">
              <input
              required
                type="text"
                name="name"
                defaultValue={name}
                readOnly
                placeholder="Toy Name"
                className="input input-bordered w-96"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl md:text-2xl">
                Toy Picture URL :
              </span>
            </label>
            <label className="input-group">
              <input
              required
              defaultValue={photo}
                readOnly
                type="text"
                name="photo"
                placeholder="Toy Picture URL "
                className="input input-bordered w-96"
              />
            </label>
          </div>
        </div>

        <div className="md:flex gap-10 items-center justify-center md:my-10 ">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl md:text-2xl">
                Seller Name:
              </span>
            </label>
            <label className="input-group">
              <input
              required
              defaultValue={sellerName}
                readOnly
                type="text"
                name="sellerName"
                placeholder="Seller Name"
                className="input input-bordered w-96"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl md:text-2xl">
                Seller Email:
              </span>
            </label>
            <label className="input-group">
              <input
              required
                type="text"
                name="sellerEmail"
                defaultValue={user?.email}
                readOnly
                className="input input-bordered w-96"
              />
            </label>
          </div>
        </div>

        <div className="md:flex gap-10 items-center justify-center md:my-10 ">
    
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl md:text-2xl">Sub-Category:</span>
            </label>
            <select
            required
              value={brand}
              readOnly
              onChange={handleSubCategoryChange}
              className="select select-success w-96"
            >
              <option >{toyDetails.subcategory}</option>

              <option className="text-xl">Sports</option>
              <option className="text-xl">Sedan</option>
              <option className="text-xl">Convertible</option>
            </select>
          </div>
    
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl md:text-2xl">Price:</span>
            </label>
            <label className="input-group">
              <input
              required
                type="number"
                name="price"
                defaultValue={price}
                className="input input-bordered w-96"
              />
            </label>
          </div>
        </div>
        <div className="md:flex gap-10 items-center justify-center md:my-10 ">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl md:text-2xl">Rating:</span>
            </label>
            <label className="input-group">
              <input
              required
                type="text"
                name="rating"
                placeholder="Rating"
                defaultValue={rating}
                readOnly
                className="input input-bordered w-96"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl md:text-2xl">
                Available Quantity :
              </span>
            </label>
            <label className="input-group">
              <input
              required
                type="number"
                name="quantity"
                placeholder="Available Quantity"
                defaultValue={quantity}
                className="input input-bordered w-96"
              />
            </label>
          </div>
        </div>

        

        <div className="md:flex gap-10 items-center justify-center md:my-10 mb-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl md:text-2xl">
                Detail Description:
              </span>
            </label>
            <label className="input-group">
              <input
              required
                type="text"
                name="details"
                placeholder="Detail Description"
                defaultValue={details}
                className="input input-bordered h-28 w-96 md:w-[800px]"
              />
            </label>
          </div>
        </div>
        <div className="flex justify-center">
          <input
          required
            type="submit"
            className="btn bg-green-600 hover:bg-green-500 w-96 md:w-[800px]"
            value="Update Toy"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateToy;

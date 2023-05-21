import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { PulseLoader } from "react-spinners";

const AddToy = () => {
  const [brand, setBrand] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [reactLoading, setReactLoading] = useState(false);

  useEffect(() => {
    setReactLoading(true);
    setTimeout(() => {
      setReactLoading(false);
    }, 400);
  }, []);

  const {user} = useContext(AuthContext)

  
  const handleSubCategory = (e) => {
    setSubcategory(e.target.value);
  };
  const handleBrandChange = (e) => {
    setBrand(e.target.value);
  };

  const handleAddToy = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const photo = form.photo.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const details = form.details.value;

    const newToy = {
      name,
      photo,
      sellerName,
      sellerEmail,
      subcategory,
      price,
      rating,
      quantity,
      details,
      brand
    };

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newToy),
    };

    fetch("http://localhost:5000/toys", options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response.insertedId) {
          Swal.fire("Toy Added Successfully");
          form.reset();
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      {
        reactLoading ? (
          <PulseLoader className="text-center mt-96" color="#36d7b7" />
        ) :

        <div>
        <h1 className="text-2xl md:text-4xl text-center font-semibold text-green-600">
          Add a Toy
        </h1>
        <form onSubmit={handleAddToy}>
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
                  type="text"
                  name="sellerName"
                  placeholder="Seller Name"
                  defaultValue={user?.displayName}
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
                  className="input input-bordered w-96"
                />
              </label>
            </div>
          </div>

          <div className="md:flex gap-10 items-center justify-center md:my-10 ">
      
          <div className="form-control">
              <label className="label">
                <span className="label-text text-xl md:text-2xl">Sub Category:</span>
              </label>
              <select
                value={subcategory}
                onChange={handleSubCategory}
                className="select select-success w-96 "
              >
                <option>Chose A Sub-Category</option>

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
                  placeholder="Price"
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
                  placeholder="Available Quantity
  "
                  className="input input-bordered w-96"
                />
              </label>
            </div>
          </div>

          <div className="md:flex gap-10 items-center justify-center md:my-10 mb-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl md:text-2xl">Brand:</span>
              </label>
              <select
                value={brand}
                onChange={handleBrandChange}
                className="select select-success w-96 md:w-[800px]"
              >
                <option>Chose A Brand</option>

                <option className="text-xl">BMW</option>
                <option className="text-xl">Ferrari</option>
                <option className="text-xl">Mercedes</option>
              </select>
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
                  placeholder="Detail Description
  "
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
              value="ADD Toy"
            />
          </div>
        </form>
      </div>}
    </>
  );
};

export default AddToy;

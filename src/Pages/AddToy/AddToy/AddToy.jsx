import React from "react";

const AddToy = () => {

    const handleAddToy = (e) => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const photo = form.photo.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const subcategory = form.subcategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const details = form.details.value;

        const toy = {name, photo, sellerName, sellerEmail, subcategory, price, rating, quantity, details}


    }


  return (
    <div>
      <h1 className="text-2xl md:text-4xl text-center font-semibold text-green-600">Add a Toy</h1>
      <form onSubmit={handleAddToy}>
        
        <div className="md:flex gap-10 items-center justify-center md:my-10 ">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl md:text-2xl">Toy Name:</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Toy Name"
                className="input input-bordered w-96"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl md:text-2xl">Toy Picture URL :</span>
            </label>
            <label className="input-group">
              <input
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
              <span className="label-text text-xl md:text-2xl">Seller  Name:</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="sellerName"
                placeholder="Seller Name"
                className="input input-bordered w-96"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl md:text-2xl">Seller Email:</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="sellerEmail"
                placeholder="Seller Email"
                className="input input-bordered w-96"
              />
            </label>
          </div>
        </div>
   
        <div className="md:flex gap-10 items-center justify-center md:my-10 ">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl md:text-2xl">Sub-category:</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="subcategory"
                placeholder="Toy Category"
                className="input input-bordered w-96"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl md:text-2xl">Price:</span>
            </label>
            <label className="input-group">
              <input
                type="text"
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
                type="text"
                name="rating"
                placeholder="Rating"
                className="input input-bordered w-96"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl md:text-2xl">Available Quantity
:</span>
            </label>
            <label className="input-group">
              <input
                type="text"
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
              <span className="label-text text-xl md:text-2xl">Detail Description
:</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="details"
                placeholder="Detail Description
"
                className="input input-bordered h-28 w-96 md:w-[800px]"
              />
            </label>
          </div>
        </div>
        <input type="submit" className="btn bg-green-600 hover:bg-green-500 w-full" value="ADD Toy" />

      </form>
    </div>
  );
};

export default AddToy;

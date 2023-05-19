import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div>
      <h1 className="text-5xl text-green-600 font-medium py-6 text-center border-b-4 border-green-600">
        Sign Up
      </h1>
      <form>
        <div className="hero my-8">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl">PhotoUrl</span>
                  </label>
                  <input
                    type="text"
                    name="photoUrl"
                    required
                    placeholder="PhotoUrl"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl">Email</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    required
                    placeholder="Email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl">Password</span>
                  </label>
                  <input
                    type="text"
                    name="password"
                    required
                    placeholder="Password"
                    className="input input-bordered"
                  />
                  <label className="text-lg mt-4">
                    
                    <p>Already have an Account ? <Link to='/signin' className="text- hover:text-green-600">
                      Signin
                    </Link></p>
                  </label>
                </div>
                <div className="form-control mt-2">
                  <button className="btn bg-green-600 hover:bg-green-700 border-none">Signup</button>
                </div>
                <div className="form-control mt-2">
                    <button className='flex justify-center border items-center gap-2 px-4 py-2 rounded-lg  font-medium text-lg duration-300 hover:bg-green-600' ><FaGoogle className='text-2xl' /> Sign Up with Google</button>
                </div>
              </div>
              
            </div>
            
          </div>
          
        </div>
        
      </form>
      
    </div>
    );
};

export default Signup;
import React, { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Signup = () => {

  const { createUser, googleSignUp, auth } = useContext(AuthContext);


  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");
  const [check, setCheck] = useState(false);
  const location = useLocation();
  const from = location?.state?.from || "/";
  const navigate = useNavigate();

  const handleAccept = (e) => {
    setCheck(e.target.checked)
};

  const handleEmailSignup = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    setSuccess("");
    setErr("");

    if (password.length < 6) {
      e.target.password.focus();
      setErr("Password at least 6 character long");
      return;
    }

    createUser(email, password)
      .then((res) => {
        const createdUser = res.user;
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoUrl,
        });
        navigate(from);
      })
      .catch((err) => {
        setErr(err.message);
        return;
      });
  };

  const handleGoogleSignUp = () => {
    googleSignUp()
        .then(res=> {
            setSuccess('Signed In')
            navigate(from)
        })
        .catch(err=>{
            setErr(err.message)
        })
  }

  return (
    <div>
      <h1 className="text-5xl text-green-600 font-medium py-2 text-center border-b-4 border-green-600">
        Sign Up
      </h1>
      <form onSubmit={handleEmailSignup}>
        <div className="hero my-8">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body w-96">
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
                    type={check? 'text' : 'password'}
                    name="password"
                    required
                    placeholder="Password"
                    className="input input-bordered"
                  />
                  <span className='flex justify-between px-2 mt-2'><p><input onClick={handleAccept} className='accent-orange-600' type="checkbox" name="" id="" /> Show password</p></span>
                  {
                           err && <p className='text-lg mt-4 text-red-600 font-medium'>{err}</p>
                  }
                  <label className="text-lg mt-4">
                    <p>
                      Already have an Account ?{" "}
                      <Link to="/signin" className="text- hover:text-green-600">
                        Signin
                      </Link>
                    </p>
                  </label>
                </div>
                <div className="form-control mt-2">
                  <input
                    className="btn bg-green-600 hover:bg-green-700 border-none"
                    type="submit"
                    value="SignUp"
                  />
                </div>
                <div className="form-control mt-2">
                  <button onClick={handleGoogleSignUp} className="flex justify-center border items-center gap-2 px-4 py-2 rounded-lg  font-medium text-lg duration-300 hover:bg-green-600">
                    <FaGoogle className="text-2xl" /> Sign Up with Google
                  </button>
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

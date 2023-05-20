import React, { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Signin = () => {

  const { signIn, googleSignUp } = useContext(AuthContext);

  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");
  const [check, setCheck] = useState(false);
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const handleAccept = (e) => {
    setCheck(e.target.checked)
};

  const handleEmailLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    setSuccess("");
    setErr("");

    signIn(email, password)
      .then((res) => {
        const user = res.user;
        const loggedInUser = {
          email: user.email
        }
        fetch('http://localhost:5000/jwt', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(loggedInUser)
          })
          .then(res => res.json())
          .then(data => {
            console.log('jwt response', data);
            localStorage.setItem('toy-access-token', data.token)
          })
        setSuccess("Signed In");
        navigate(from);
      })
      .catch((err) => {
        setErr(err.message);
      });
  };


  const handleGoogleSignIn = () => {
    googleSignUp()
    .then((res) => {
      const user = res.user;
      const loggedInUser = {
        email: user.email
      }
      fetch('http://localhost:5000/jwt', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(loggedInUser)
        })
        .then(res => res.json())
        .then(data => {
          console.log('jwt response', data);
          localStorage.setItem('toy-access-token', data.token)
        })
      setSuccess("Signed In");
      navigate(from);
    })
        .catch(err=>{
            setErr(err.message)
        })
  }

  return (
    <div>
      <h1 className="text-5xl text-green-600 font-medium py-6 text-center border-b-4 border-green-600">
        Sign In
      </h1>
      <form onSubmit={handleEmailLogin}>
        <div className="hero my-8">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body w-96">
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
                      Don&apos;t Have Account ?{" "}
                      <Link state={{from: from}} to="/signup" className="text- hover:text-green-600">
                        Signup
                      </Link>
                    </p>
                  </label>
                </div>
                <div className="form-control mt-2">
                    <input className="btn bg-green-600 hover:bg-green-700 border-none" type="submit" value="Signin" />
                </div>
                <div className="form-control mt-2">
                  <button onClick={handleGoogleSignIn} className="flex justify-center border items-center gap-2 px-4 py-2 rounded-lg  font-medium text-lg duration-300 hover:bg-green-600">
                    <FaGoogle className="text-2xl" /> Sign In with Google
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

export default Signin;

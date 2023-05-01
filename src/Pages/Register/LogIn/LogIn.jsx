import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";
import { Link } from "react-router-dom";

const provider = new GoogleAuthProvider();

const LogIn = () => {
  const { providerLogin } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    providerLogin(provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="bg-slate-200 my-12 lg:p-10 p-4 mx-4 lg:w-1/2 lg:mx-auto">
      <h1 className="text-3xl font-serif text-center">Log In</h1>
      <div className="flex-grow border-t border-slate-600 mt-3 mb-9 w-2/4 mx-auto"></div>

      <form
        className="flex flex-col gap-4 max-w-md mx-auto shadow-lg shadow-cyan-600 p-4"
      >
        <div>
          <div className="mb-2 block font-serif">
            <h5>Email</h5>
          </div>
          <input type="email" placeholder="Enter Your Email" className="input input-bordered input-info w-full max-w-lg" />
        </div>

        <div>
          <div className="mb-2 block font-serif">
            <h5>Password</h5>
          </div>
          <input type="password" placeholder="Enter Your Password" className="input input-bordered input-info w-full max-w-lg" />
        </div>

        <button className="p-2 shadow-sm text-xl font-serif hover:bg-cyan-600 hover:text-white shadow-cyan-600 bg-white" type="submit">Login</button>
      </form>

      <div className="flex lg:w-64 w-40 mx-auto py-5 my-3 items-center">
        <div className="flex-grow border-t border-slate-900"></div>
        <span className="flex-shrink mx-4 text-slate-900">OR</span>
        <div className="flex-grow border-t border-slate-900"></div>
      </div>

      <div className="flex justify-center shadow-sm shadow-cyan-600 hover:bg-cyan-600 hover:text-white p-2 bg-white lg:w-1/2 mx-auto rounded">
        <button
          className="flex gap-2 items-center"
          onClick={handleGoogleSignIn}
        >
          <FcGoogle className="text-2xl"></FcGoogle>
          <h3 className="text-md">Sign in with Google</h3>
        </button>
      </div>

      <div className="flex gap-2 mt-6 justify-center items-center">
        <h3>Do not Have any Account?</h3>
        <Link className="text-sm font-bold hover:text-cyan-600" to="/signup">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default LogIn;
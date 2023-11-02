import { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const handleUserClick = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="login"
        />
      </div>
      <form className="absolute bg-black w-3/12 my-48 mx-auto right-0 left-0 text-white p-12 bg-opacity-75 rounded-md">
        <h1 className="text-3xl font-bold my-4">
          {isSignIn ? "Sign in" : "Sign Up"}
        </h1>
        {!isSignIn && <input
          type="text"
          placeholder="Full Name"
          className="p-2 my-4 w-full rounded-md bg-gray-800"
        />}
        <input
          type="text"
          placeholder="Email address"
          className="p-2 my-4 w-full rounded-md bg-gray-800"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full rounded-md bg-gray-800"
        />
        <button className="w-full bg-red-800 my-4 p-2 rounded-md">
          {isSignIn? "Sign in" : "Sign up"}
        </button>
        <p className="text-sm">
          {isSignIn?"New user?": "Already registered?"}{" "}
          <span
            className="font-bold cursor-pointer text-blue-600"
            onClick={handleUserClick}
          >
            {isSignIn?"Sign Up" : "Sign in"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;

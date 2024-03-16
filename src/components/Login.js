import { useState, useRef } from "react";
import Header from "./Header";
import { validateCredentials } from "../utils/validateCredentials";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../utils/firebase"


const Login = () => {
  const [logInfo, setlogInfo] = useState(true);
  const [displayError, setdisplayError] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  

  const handleLogin = () => {
    if (logInfo === true) setlogInfo(false);
    else setlogInfo(true);
  };

  const handlecredentials = () => {
    const credentialsData = validateCredentials(
      email.current.value,
      password.current.value
    );
    setdisplayError(credentialsData);

    if (credentialsData !== null) return;

    if (logInfo === false) {
      
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          if(user) setdisplayError("You are registered.")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setdisplayError(errorCode + "- " + errorMessage);
        });
    } else {
      
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          if(user) setdisplayError("Successfully loggedIn");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setdisplayError(errorCode + "- " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute bg-gradient-to-b from-black">
        <img
          alt="bg-logo"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        />
      </div>
      <form
        className="absolute bg-black bg-opacity-80 w-3/12 mx-auto left-0 right-0 my-36 py-12 px-10"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-white text-3xl mb-4 font-bold">
          {logInfo ? "Sign In" : "Sign Up"}
        </h1>
        {logInfo === false && (
          <input
            type="text"
            placeholder="Full Name"
            className="px-2 py-3 text-white bg-gray-800 w-full rounded-sm"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email or phone number"
          className="px-2 py-3 my-3 text-white bg-gray-800 w-full rounded-sm"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="px-2 py-3 text-white bg-gray-800 w-full rounded-sm"
        />
        <p className="text-red-700 text-sm pt-3 font-bold">{displayError}</p>
        <button
          className="bg-red-600 rounded-sm w-full text-white px-2 py-3 mt-6 font-bold"
          onClick={() => handlecredentials()}
        >
          {logInfo ? "Sign In" : "Sign Up"}
        </button>
        <p className="mt-3 text-slate-400 text-sm">
          {logInfo ? "New to Netflix?" : "Already Registered?"}
          <span
            className="text-white ml-2 cursor-pointer"
            onClick={() => handleLogin()}
          >
            {logInfo ? "Sign Up now." : "Sign In now."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;

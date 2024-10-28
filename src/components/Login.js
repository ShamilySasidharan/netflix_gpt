import { checkForValidation } from "../utils/validate";
import Header from "./Header";
import { useState, useRef } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile 
} from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR,BACKGROUND_IMAGE } from "../utils/constants";
const Login = () => {
  const [signUp, setSignUp] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const dispatch = useDispatch()
 
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleValidation = () => {
    //  checkForValidation()
    // useref gives the value as object in the name of 'current' which is an object, inside that there is 'value' it  will give the values for the required field
    // console.log(fullname.current.value)
    // console.log(email.current.value);
    // console.log(password.current.value);
    const message = checkForValidation(
      email.current.value,
      password.current.value
    );
    setErrorMsg(message);
    // console.log(messageAfterValidationPresent);
    if (message) return;

    // No message to display then only the signup and sign in shows
    if (signUp) {
        // Signed up api
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value, photoURL: USER_AVATAR
          }).then(() => {
            // Profile updated! then dispatch an action to update the user details in store and navigate
            //  const {uid, email,displayName,photoURL} = auth.currentUser; we are getting the details from the updated user that is 'auth.currentUser'
            //  not from the user that created when sign up  =>  const user = userCredential.user;
            const {uid, email,displayName,photoURL} = auth.currentUser;
            dispatch(addUser({ui:uid,email:email,displayName:displayName,photoURL:photoURL}))
           
          }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMsg(errorCode + " " + errorMessage);
          });
          
          // console.log(user);
       
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " " + errorMessage);
          // ..
        });
    } else {
    // Signed in api
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
         
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " " + errorMessage);
        });
    }
  };
    // toggle function 
  const handleSignUpForm = () => {
    setSignUp(!signUp);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src= {BACKGROUND_IMAGE}
          alt="background"
          className="opacitiy-90 object-cover min-h-[100vh] w-full"
        />
      </div>

      <form
       className="w-11/12 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12 p-5 bg-black opacity-80 m-auto relative top-40  md:top-40 text-white rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl">
          {" "}
          {signUp ? "Sign Up" : "Sign In"}
        </h1>
        {signUp ? (
          <input
            ref={name}
            type="text"
            placeholder="Full Name "
            className="my-4 p-4  w-full rounded-md bg-black border border-white"
          />
        ) : (
          ""
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email or Mobile Number"
          className="my-4 p-4  w-full rounded-md bg-black border border-white"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="my-4 p-4 w-full rounded-md bg-black border border-white"
        />
        <p>{errorMsg}</p>
        <button
          className="bg-netflix_red my-4 p-4 w-full rounded-md font-bold"
          onClick={handleValidation}
        >
          {signUp ? "Sign Up" : "Sign In"}
        </button>
        <p className="text-center p-2 ">Forgot password ?</p>
        {signUp ? (
          <p onClick={handleSignUpForm} className="cursor-pointer">
            Already a user ?<span className="font-bold"> Sign In Now.</span>
          </p>
        ) : (
          <p onClick={handleSignUpForm} className="cursor-pointer">
            New to netflix?
            <span className="font-bold"> Sign Up Now.</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;

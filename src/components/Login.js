import Header from "./Header";
import { useState } from "react";
const Login = () => {
    const [signUp ,setSignUp] = useState(false)
    const handleSignUpForm = ()=>{
        setSignUp(!signUp)
    }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7c0e18aa-2c95-474d-802e-7f30e75dcca4/web/IN-en-20241014-TRIFECTA-perspective_e7121311-c11e-4809-a3e6-22abffa33569_small.jpg"
          alt="background"
          className="opacitiy-90"
        />
      </div>

      <form className="w-3/12 p-5  bg-black opacity-80 m-auto relative top-60 text-white rounded-md ">
        <h1 className="font-bold text-3xl"> {signUp ? "Sign Up" : "Sign In"}</h1>
{signUp ? <input
          type="text"
          placeholder="Full Name "
          className="my-4 p-4  w-full rounded-md bg-black border border-white"
        /> : ""}
       
        <input
          type="text"
          placeholder="Email or Mobile Number"
          className="my-4 p-4  w-full rounded-md bg-black border border-white"
        />
        <input
          type="password" 
          placeholder="Password"
          className="my-4 p-4 w-full rounded-md bg-black border border-white"
        />
        <button className="bg-netflix_red my-4 p-4 w-full rounded-md font-bold">
        {signUp ? "Sign Up" : "Sign In"}
        </button>
        <p className="text-center p-2 ">Forgot password ?</p>
        {signUp ? (<p onClick={handleSignUpForm} className="cursor-pointer">
          
          Already a user ?
             <span className="font-bold"> Sign In Now.</span>
           </p>) : (<p onClick={handleSignUpForm} className="cursor-pointer">
          
          New to netflix?
          <span className="font-bold"> Sign Up Now.</span>
        </p>)}
        
      </form>
    </div>
  );
};

export default Login;

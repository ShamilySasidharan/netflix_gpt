import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { LOGO } from "../utils/constants";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUSer } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleGptSearchView } from "../utils/gptSlice"
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage} from "../utils/langConfigSlice";
import {showTheLanguageSelector} from "../utils/langConfigSlice"


const Header = () => {
  const userPhoto = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        //  setSignedIn(false)
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const langOptionSelector  = useSelector((store)=>store.languageConfig.showSelectorOption)
 

  const handleGPTSearch =()=>{
    dispatch(toggleGptSearchView())
    dispatch(showTheLanguageSelector())
    
    
  }

  const handleLanguageChange = (e)=>{
    // console.log(e.target.value)
    dispatch(changeLanguage(e.target.value))
  }



  // setting the onAuthStateChange inside the useEffect so it will not call again and again
  useEffect(() => {
    // when ever the user sign in, sign out and sign up the event listener works
    //unsubscribe function will get from the firebase will remove the onAuthStateChnaged
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, sign up dispatch an addUser action
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            ui: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out, dispaatch a removeUser action
        dispatch(removeUSer());
        navigate("/");
      }
    });
    //unsubscribe when the component unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="bg-black w-full z-10 flex  justify-between absolute">
      <div className="w-full flex flex-col  md:flex-row justify-between">
      <img className="w-44 py-4 mx-auto  md:mx-0" src={LOGO} alt="logo_netflix" />
      {/* WHEN I HAVE USER LOAD THIS  */}
      {userPhoto && (
        <div className="flex flex-col md:flex-row md:py-5 text-center gap-2 md:pr-10 pb-10 ">
         
         <button className="text-red-700 md:text-xl font-bold text-center 
          md:px-2 no-underline  hover:text-red-500  " onClick={handleGPTSearch}>
           {langOptionSelector ? "Home" : "GPTSearch"} 
          </button>



          {langOptionSelector &&  <div className="md:mt-3  mx-28 md:mx-0 justify-between text-center md:bg-black rounded-md border border-red-800 md:border-none">
          <select  id="underline_select" className="  cursor-pointer p-1.5  w-full md:text-xl font-semibold md:font-bold rounded-sm bg-transparent hover:text-red-500 text-red-700   focus:outline-none focus:ring-0 " onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map((lang)=><option key ={lang.id} value={lang.id} className=" text-netflix_red text-sm">{lang.name}</option>)}
           </select>
          </div>}
         
          
         
          <img
            className=" hidden md:block md:w-12 md:h-12 md:rounded-md "
            src={userPhoto.photoURL}
            alt="userIcon"
          />

          <button
            className="text-sm m-auto text-white md:text-lg md:font-bold md:text-center md:px-2 cursor-pointer"
            onClick={handleSignOut}
          >
            Sign out
          </button>
        </div>
      )}
      </div>
     
    </div>
  );
};

export default Header;

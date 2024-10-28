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
    <div className="bg-black w-full z-10 flex justify-between align-middle absolute">
      <div className="w-full flex justify-between">
      <img className="w-44 py-4 mx-10" src={LOGO} alt="logo_netflix" />
      {/* WHEN I HAVE USER LOAD THIS  */}
      {userPhoto && (
        <div className="flex py-5 gap-2 pr-10">
         

         <button className="text-red-700 text-xl font-bold text-center 
          px-2 no-underline  hover:text-red-500" onClick={handleGPTSearch}>
           {langOptionSelector ? "Home" : "GPTSearch"} 
          </button>

          {langOptionSelector &&  <div className="mt-3">
          <select  id="underline_select" className=" cursor-pointer p-1.5 w-full text-xl font-bold rounded-sm bg-transparent hover:text-red-500 text-red-700   focus:outline-none focus:ring-0 " onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map((lang)=><option key ={lang.id} value={lang.id} className=" text-netflix_red text-sm">{lang.name}</option>)}
           </select>
          </div>}
         
           
         
          <img
            className="w-12 h-12 rounded-md"
            src={userPhoto.photoURL}
            alt="userIcon"
          />

          <button
            className="text-white font-bold text-center px-2 cursor-pointer"
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

import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { LOGO } from "../utils/constants";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUSer } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

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
    <div className="bg-gradient-to-b from-black pt-30 w-full z-10 flex justify-between align-middle absolute">
      <img className="w-44 py-4 " src={LOGO} alt="logo_netflix" />
      {/* WHEN I HAVE USER LOAD THIS  */}
      {userPhoto && (
        <div className="flex py-5 gap-2 ">
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
  );
};

export default Header;

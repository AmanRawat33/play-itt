import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import {LOGO, AVATAR} from "../utils/constants"
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // navigate("/"); no need now as we are using onauthstatechanged
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //   user is signed in
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid: uid, displayName: displayName, email: email }));
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="overflow-hidden">
      <div className="px-2 py-2 bg-gradient-to-b from-black flex justify-between items-center w-screen absolute z-10">
        <img
          className="w-48"
          src={LOGO}
          alt="logo"
        />

        {user && (
          <div className="flex p-2">   
            <img
              className="w-12 h-12"
              src={AVATAR}
              alt="user-icon"
            />
            <button
              onClick={handleSignOut}
              className="mx-1 bg-red-600 font-bold text-white p-2 rounded-sm"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

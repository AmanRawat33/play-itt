import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { LOGO, AVATAR } from "../utils/constants";
import { toggleGPTSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "./languageConstants";
import { changeLanguage } from "../utils/configSlice";
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
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  const handleGptClick = () => {
    dispatch(toggleGPTSearchView());
  };
    const handleLanguageChange = (e) => {
      dispatch(changeLanguage(e.target.value));
    };
  return (
    <div className="overflow-hidden">
      <div className="pl-6 py-2 bg-gradient-to-b from-black flex flex-col md:flex-row justify-between items-center w-screen absolute z-10">
        <img className="w-48 m-0 p-0" src={LOGO} alt="logo" />

        {user && (
          <div className="flex p-2 mr-5">
            {showGptSearch && <select className="mr-2 p-2 bg-inherit backdrop-blur-sm text-white font-bold"
            onClick={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}
                className="text-black bg-gray-100">
                  {lang.name}
                </option>
              ))}
            </select>}
            <button
              className="py-2 px-4 text-white mr-5 font-bold bg-red-600 backdrop-blur-md rounded-md"
              onClick={handleGptClick}
            >
              {showGptSearch? "Back to Netflix" : "GPT Search"}
            </button>
            <img className="w-12 h-12 rounded-md" src={AVATAR} alt="user-icon" />
            <button
              onClick={handleSignOut}
              className="ml-1 bg-red-600 font-bold text-white p-2 rounded-md"
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

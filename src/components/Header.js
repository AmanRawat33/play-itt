import { auth } from "../utils/firebase"
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user)
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/")
      })
      .catch((error) => {
        // An error happened.
      });

  }
  return (
    <div className="overflow-hidden">
      <div className="px-2 py-2 bg-gradient-to-b from-black flex justify-between items-center w-screen absolute z-10">
        <img
          className="w-48"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />

        {user && <div className="flex p-2">
          <img
            className="w-12 h-12"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="user-icon"
          />
          <button onClick={handleSignOut} className="mx-1 bg-red-600 font-bold text-white p-2 rounded-sm">Sign Out</button>
        </div>}
      </div>
    </div>
  );
};

export default Header;

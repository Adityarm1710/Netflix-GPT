import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import auth from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { toggleviewStatus } from "../utils/gptSlice";
import allowedLanguages from "../utils/constants";
import { setselectedLangauge } from "../utils/langSlice";


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignout = () => {
    signOut(auth).then(() => {});
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ Uid: uid, email: email, displayName: displayName }));
        navigate("/Browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const userdata = useSelector((store) => store.user);
  const viewStatus= useSelector((store)=>store.gpt.viewStatus);

 const handleviewstatus=()=>{
    dispatch(toggleviewStatus());
 };

 const handlelanguagestatus=(event)=>{
     dispatch(setselectedLangauge(event.target.value));
 };

  return (
    <div className="bg-gradient-to-b w-full from-black absolute px-10 py-4 z-10 flex justify-between">
      <img
        className="w-[150px]"
        alt="logo"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />
      {userdata && (
        <div className="pt-4 pr-7 flex">
         {viewStatus&&(<select onChange={handlelanguagestatus} className="px-4 py-1 mr-3 mb-4 p-1 bg-green-700 rounded-md cursor-pointer text-white font-bold">
            {
              allowedLanguages.map((lang)=> <option key={lang.code} value={lang.code}>{lang.name}</option>)
            }
          </select>)}
          <button onClick={handleviewstatus} className="px-4 py-1 mr-3 mb-4 bg-purple-700 rounded-md cursor-pointer  text-white font-bold">
            {viewStatus ? "Home" : "GPT Search"}
          </button>
          <img
            className="w-10 pb-4"
            alt="Browse logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          />
          <span
            className="cursor-pointer text-white pl-3 pt-2"
            onClick={handleSignout}
          >
            Sign Out
          </span>
        </div>
      )}
    </div>
  );
};

export default Header;

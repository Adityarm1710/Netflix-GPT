import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {useEffect} from "react";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body= ()=>{

  const dispatch = useDispatch();

  const Approuter= createBrowserRouter([
    {
      path:"/",
      element: <Login/>
    },
    {
      path:"/Browse",
      element: <Browse/>
    }
  ]);

  useEffect(()=>{

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName} = user;
        dispatch(addUser({Uid:uid, email:email, displayName:displayName}));

      } else {
        dispatch(removeUser());
      }
    })
  },[]);

  return (   
      <div>
        <RouterProvider router={Approuter}/>
      </div>
  );
};



export default Body;
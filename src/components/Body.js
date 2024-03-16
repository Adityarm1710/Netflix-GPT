import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Body= ()=>{

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

  return (   
      <div>
        <RouterProvider router={Approuter}/>
      </div>
  );
};



export default Body;
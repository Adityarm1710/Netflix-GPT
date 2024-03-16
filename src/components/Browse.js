import Usegetpopularmovies from "../Hooks/Usegetpopularmovies";
import Header from "./Header";
import Mainvideopart from "./Mainvideopart";


const Browse = ()=>{

  const moviesList = Usegetpopularmovies();
 

  return(
    <div>
      <Header/>
      {/* <Mainvideopart/> */}
    </div>
  );
};

export default Browse;
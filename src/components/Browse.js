import Usegetnowplayingmovies from "../Hooks/Usegetnowplayingmovies";
import Usegetpopularmovies from "../Hooks/Usegetpopularmovies";
import Usegettopratedmovies from "../Hooks/Usegettopratedmovies";
import Header from "./Header";
import Mainvideopart from "./Mainvideopart";
import Secondaryvideopart from "./secondaryvideopart";

const Browse = ()=>{

 Usegetpopularmovies();
 Usegettopratedmovies();
 Usegetnowplayingmovies();

  return(
    <div>
      <Header/>
      <Mainvideopart/>
      <Secondaryvideopart/>
    </div>
  );
};

export default Browse;
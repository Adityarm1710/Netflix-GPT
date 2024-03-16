import Usegetpopularmovies from "../Hooks/Usegetpopularmovies";
import Header from "./Header";

const Browse = ()=>{

  Usegetpopularmovies();

  return(
    <div>
      <Header/>     
    </div>
  );
};

export default Browse;
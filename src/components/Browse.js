import Usegetnowplayingmovies from "../Hooks/Usegetnowplayingmovies";
import Usegetpopularmovies from "../Hooks/Usegetpopularmovies";
import Usegettopratedmovies from "../Hooks/Usegettopratedmovies";
import Header from "./Header";
import Mainvideopart from "./Mainvideopart";
import Secondaryvideopart from "./secondaryvideopart";
import { useSelector } from "react-redux";
import GptBrowse from "./GptBrowse";

const Browse = () => {
  Usegetpopularmovies();
  Usegettopratedmovies();
  Usegetnowplayingmovies();

  const viewStatus = useSelector((store) => store.gpt.viewStatus);

  return (
    <div>
      <Header />
      { viewStatus ? (
        <GptBrowse />
      ) : (
        <>
          <Mainvideopart />
          <Secondaryvideopart />
        </>
      )}
    </div>
  );
};

export default Browse;

import Movieslist from "./Movieslist";
import { useSelector } from "react-redux";

const Secondaryvideopart = () => {
  const list = useSelector((store) => store.movie);
  
  return (
    <div className="bg-black">
      <div className="-mt-80 relative z-20">
        <Movieslist
          title={"Popular"}
          movies={list.moviesList}
        />
        <Movieslist
          title={"Top Rated"}
          movies={list.topratedmoviesList}
        />
        <Movieslist
          title={"Now Playing"}
          movies={list.nowplayingmoviesList}
        />
      </div>
    </div>
  );
};

export default Secondaryvideopart;

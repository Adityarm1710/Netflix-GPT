import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {addMovies} from "../utils/moviesSlice";

const Usegetpopularmovies=()=>{

  const dispatch = useDispatch();

  const getmoviesapi= async ()=>{
    const data =  await fetch('https://api.themoviedb.org/3/movie/changes?page=1&api_key=f8d67948a9550e311f6db5651bbd63ba');

    const json = await data.json();

    console.log(json.results);
   
  //  dispatch(addMovies(json.results));

 }
     
     useEffect(()=>{
        getmoviesapi();
     },[]);

    
};

export default Usegetpopularmovies;
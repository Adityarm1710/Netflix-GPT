const Moviescard = ({Image_path})=>{
  return(
    <div className="w-48 p-1">
      <img alt="Movies Card" src={"https://image.tmdb.org/t/p/w200"+ Image_path}/>
    </div>
  );
};

export default Moviescard;
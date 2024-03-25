import Moviescard from "./Moviescard";

const Movieslist = ({ title, movies }) => {
  if (!movies) return;
  console.log(movies);
  return (
    <div className="pl-4">
      <h1 className=" m-2 text-3xl text-white font-bold">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
           {movies.map((movie) => (
            <Moviescard Image_path={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movieslist;

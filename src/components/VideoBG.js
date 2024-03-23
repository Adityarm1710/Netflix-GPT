import usegettrailorvideo from "../Hooks/usegettrailorvideo"
import { useSelector } from "react-redux";

const VideoBG = ({ movie_id }) => {

  const Trailor_id = useSelector((store) => store.movie?.trailorVideoData);

  usegettrailorvideo(movie_id);

  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + Trailor_id?.key + "?&autoplay=1&mute=1" }
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default VideoBG;

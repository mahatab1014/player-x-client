import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const GameCard = ({ game }) => {
  const { title, brief_description, _slug, game_thumbnails } = game;

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
    });
  }, []);

  return (
    <div
      data-aos="fade-up"
      className="h-full flex flex-col justify-between p-5 shadow-lg hover:shadow-xl shadow-[#8e87e629] hover:shadow-[#8d87e63d] rounded-xl transition-all"
    >
      <figure data-aos="fade-in" className="">
        <img className="rounded-xl" src={game_thumbnails[0]} alt={title} />
      </figure>

      <div className="">
        <h2 className="text-2xl text-white py-3">{title}</h2>
        <p>{brief_description}</p>
      </div>

      <div className="">
        <Link className="" to={`/game/${_slug}`}>
          <button className="btn btn-sm border-none bg-secondary hover:bg-secondary text-black hover:text-black rounded-none">
            Purchase
          </button>
        </Link>
      </div>
    </div>
  );
};

GameCard.propTypes = {
  game: PropTypes.object.isRequired,
};
export default GameCard;

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const ServiceCard = ({ service }) => {
  const { _slug, title, description, image } = service;
  return (
    <div className="h-full flex flex-col justify-between p-5 shadow-lg hover:shadow-xl shadow-[#8e87e629] hover:shadow-[#8d87e63d] rounded-xl transition-all">
      <figure className="">
        <img className="rounded-xl" src={image} alt={description} />
      </figure>

      <div className="">
        <h2 className="text-2xl text-white py-3">{title}</h2>
        <p>{description}</p>
      </div>

      <div className="">
        <Link className="" to={`/service/${_slug}`}>
          <button className="btn btn-sm border-none bg-secondary hover:bg-secondary text-black hover:text-black rounded-none">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};
ServiceCard.propTypes = {
  service: PropTypes.object.isRequired,
};
export default ServiceCard;

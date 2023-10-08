/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const BlogCard = ({ blog }) => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
    });
  }, []);
  const { _slug, cover_thumbnail, title, details } = blog;
  return (
    <div
      data-aos="fade-up"
      className="card shadow-xl shadow-[#ffffff12]"
    >
      <figure className="">
        <img src={cover_thumbnail} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="text-2xl">{title}</h2>
        <p>
          {details[0]?.slice(0, 110)}.....
          <Link to={`/blog/${_slug}`} className=" text-blue-400 underline">
            Read More
          </Link>
        </p>
      </div>
    </div>
  );
};

export default BlogCard;

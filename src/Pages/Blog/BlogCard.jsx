import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const BlogCard = ({ blog }) => {
  const {_slug, cover_thumbnail, title, details } = blog;
  return (
    <div className="card shadow-xl border shadow-[#ffffff12]">
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

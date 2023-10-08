import { useLoaderData } from "react-router-dom";
import BlogCard from "./BlogCard";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Blog = () => {
  const data = useLoaderData();

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
    });
  }, []);

  return (
    <section>
      <div className="container mx-auto py-20 px-5">
        <div data-aos="fade-in" className="section-title text-center">
          <h2 className="text-3xl md:text-5xl font-semibold uppercase text-white">
            Latest <span className="text-primary">Blog</span>
          </h2>
          <p className="md:max-w-3xl md:m-auto pt-2 pb-5">
            Explore the cutting-edge world of design, development, and user
            experience with our latest blog articles. Our team of experts and
            thought leaders share insights, tips, and industry trends to keep
            you updated and inspired. Stay ahead of the curve with our fresh and
            informative blog content.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

import { Link, useLoaderData, useParams } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const BlogDetails = () => {
  const data = useLoaderData();
  const { id } = useParams(data);
  const exactBlog = data.find((blog) => blog._slug === id);

  const { title, category, cover_thumbnail, author, details } = exactBlog;

  useEffect(() => {
    AOS.init({
      offset: 180,
      duration: 500,
      easing: "ease-in-sine",
      disable: "mobile",
    });
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <div className="lg:flex lg:-mx-6">
          <div className="lg:w-3/4 lg:px-6">
            <img
              data-aos="fade-in"
              className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl"
              src={cover_thumbnail}
              alt={title}
            />

            <div data-aos="fade-in">
              <p className="mt-6 text-sm text-blue-500 uppercase">{category}</p>

              <h1 className="max-w-lg mt-4 text-2xl font-semibold leading-tight text-gray-800 dark:text-white">
                {title}
              </h1>

              <div className="flex items-center mt-6">
                <img
                  className="object-cover object-center w-10 h-10 rounded-full"
                  src={author?.author_img}
                  alt={author?.author_name}
                />

                <div className="mx-4">
                  <h4 className="text-sm text-gray-700 dark:text-gray-200">
                    {author?.author_name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {author?.author_job}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-5 mt-5">
              {details.map((detail, index) => (
                <p data-aos="fade-up" key={index}>
                  {detail}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-8 lg:w-1/4 lg:mt-0 lg:px-6">
            <h4 className="text-xl">Latest Game News</h4>
            {data.map((menu) => (
              <div key={menu?.id} data-aos="fade-in">
                <div>
                  <h3 className="text-blue-500 capitalize">{menu?.category}</h3>
                  <Link
                    to={`/blog/${menu?._slug}`}
                    className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400"
                  >
                    {menu?.title}
                  </Link>
                </div>
                <hr className="my-6 border-gray-200 dark:border-gray-700" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;

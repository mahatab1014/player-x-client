import { useLoaderData, useParams } from "react-router-dom";
import ServiceModal from "../../Components/DaisyUi/ServiceModal";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Service = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const exactData = data.find((service) => service._slug === id);
  const { title, long_description, price, image } = exactData;

    useEffect(() => {
      AOS.init({
        offset: 200,
        duration: 500,
        easing: "ease-in-sine",
        disable: "mobile",
      });
    }, []);
  
  return (
    <section>
      <div className="container mx-auto md:py-10 ">
        <article className="card md:card-side">
          <figure data-aos="fade-in" className="">
            <img src={image} className="" alt="" />
          </figure>
          <div data-aos="fade-left" className="card-body">
            <h1 className="text-4xl text-white">{title}</h1>
            <p>{long_description}</p>
            <div className="flex items-center gap-5">
              <span>$ {price}</span>

              <button
                onClick={() => document.getElementById("purchase").showModal()}
                className="btn btn-sm border-none bg-secondary hover:bg-secondary text-black hover:text-black  rounded-none"
              >
                Purchase
              </button>
            </div>
          </div>
        </article>
      </div>
      <ServiceModal data={exactData} />
    </section>
  );
};

export default Service;

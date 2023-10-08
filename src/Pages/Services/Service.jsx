import { useLoaderData, useParams } from "react-router-dom";
import ServiceModal from "../../Components/DaisyUi/ServiceModal";

const Service = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const exactData = data.find((service) => service._slug === id);
  const { title, long_description, price, image } = exactData;
  
  return (
    <section>
      <div className="container mx-auto md:py-10 ">
        <article className="card md:card-side">
          <figure className="">
            <img src={image} className="" alt="" />
          </figure>
          <div className="card-body">
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

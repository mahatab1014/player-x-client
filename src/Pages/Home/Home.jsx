import FeaturedCollection from "../../Components/FeaturedCollection/FeaturedCollection";
import ServiceGrid from "../../Components/Services/ServiceGrid";
import Slider from "./Slider/Slider";

const Home = () => {
  return (
    <>
      <section>
        <Slider />
      </section>

      <section className="py-20">
        <div className="container mx-auto">
          <div className="section-title text-center">
            <h2 className="text-5xl font-semibold uppercase text-white">
              Our <span className="text-primary">Ser</span>vices
            </h2>
            <p className="md:max-w-3xl md:m-auto pt-2 pb-5">
              Welcome to a world of gaming excellence. At Our Gaming Services,
              we offer a diverse range of solutions to elevate your gaming
              experience. Whether you're a gamer, a developer, or an eSports
              enthusiast, we have something special in store for you.
            </p>
          </div>
          <ServiceGrid />
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto">
          <div className="section-title text-center">
            <h2 className="text-5xl font-semibold uppercase text-white">
              Featu<span className="text-primary">red</span> collection
            </h2>
            <p className="md:max-w-3xl md:m-auto pt-2 pb-5">
              Explore the 'FEATURED COLLECTION' and find your next gaming
              obsession today. Click on any game to learn more about it, watch
              gameplay trailers, read reviews, and access convenient links to
              get started on your gaming adventure.
            </p>
          </div>
          <FeaturedCollection />
        </div>
      </section>
    </>
  );
};

export default Home;

import FeaturedCollection from "../../Components/FeaturedCollection/FeaturedCollection";
import ServiceGrid from "../../Components/Services/ServiceGrid";
import Events from "./Events/Events";
import Slider from "./Slider/Slider";

const Home = () => {
  return (
    <>
      <section className="[&>div]:!h-full sm:[&>div]:!h-[70vh]">
        <Slider />
      </section>

      <section className="py-20 px-5">
        <div className="container mx-auto">
          <div className="section-title text-center">
            <h2 className="text-3xl md:text-5xl font-semibold uppercase text-white">
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

      <section className="py-20 bg-base-200 px-5">
        <div className="container mx-auto">
          <div className="section-title text-center">
            <h2 className="text-3xl md:text-5xl font-semibold uppercase text-white">
              Upcoming<span className="text-primary"> Events</span>
            </h2>
            <p className="md:max-w-3xl md:m-auto pt-2 pb-5">
              Stay ahead of the gaming curve with our 'Events Countdown.' Get
              the inside track on upcoming gaming tournaments, releases, and
              conventions. Watch the seconds tick away as you anticipate the
              next big gaming event. Click on an event to learn more and mark
              your calendar for gaming greatness!
            </p>
          </div>
          <Events />
          <div className="text-center pt-10 space-y-3">
            <h4 className="text-2xl">Subscribe for next events update!</h4>
            <div className="join justify-center flex-col md:flex-row gap-2 md:gap-0">
              <input
                className="input w-full block md:w-auto md:inline-block input-bordered rounded-lg md:rounded-none md:join-item "
                placeholder="Email"
              />
              <button className="btn w-full block md:w-auto md:inline-block bg-secondary hover:bg-secondary text-black md:join-item md:rounded-r-full rounded-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-5">
        <div className="container mx-auto">
          <div className="section-title text-center">
            <h2 className="text-3xl md:text-5xl font-semibold uppercase text-white">
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

import ServiceGrid from "../../Components/Services/ServiceGrid";

const Services = () => {
  return (
    <section className="py-20 px-5">
      <div className="container mx-auto">
        <div className="section-title text-center">
          <h2 className="text-3xl sm:text-5xl font-semibold uppercase text-white">
            Our <span className="text-primary">Ser</span>vices
          </h2>
          <p className="md:max-w-3xl md:m-auto pt-2 pb-5">
            Welcome to a world of gaming excellence. At Our Gaming Services, we
            offer a diverse range of solutions to elevate your gaming
            experience. Whether you're a gamer, a developer, or an eSports
            enthusiast, we have something special in store for you.
          </p>
        </div>
        <ServiceGrid />
      </div>
    </section>
  );
};

export default Services;

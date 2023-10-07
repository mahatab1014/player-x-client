import FeaturedCollection from "../../Components/FeaturedCollection/FeaturedCollection";

const Shop = () => {
  return (
    <section>
      <div className="container mx-auto px-5 py-10">
        <div className="section-title text-center">
          <h2 className="text-3xl md:text-5xl font-semibold uppercase text-white">
            Our <span className="text-primary">Latest</span> collection
          </h2>
          <p className="md:max-w-3xl md:m-auto pt-2 pb-5">
            Explore the 'FEATURED COLLECTION' and find your next gaming
            obsession today. Click on any game to learn more about it, watch
            gameplay trailers, read reviews, and access convenient links to get
            started on your gaming adventure.
          </p>
        </div>
        <FeaturedCollection />
      </div>
    </section>
  );
};

export default Shop;

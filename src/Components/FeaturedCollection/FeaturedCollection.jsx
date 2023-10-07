import { useEffect, useState } from "react";
import GameCard from "./GameCard";

const FeaturedCollection = () => {
  const [data, setData] = useState([]);
  const [hideLoadMoreButton, setHideLoadMoreButton] = useState(false);
  const [dataLoaded, setDataLoadedFull] = useState(6);

  useEffect(() => {
    fetch("/data/game.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  const handleLoadMore = () => {
    setDataLoadedFull(data.length);
    setHideLoadMoreButton(true);
  };
  const handleSeeLess = () => {
    setDataLoadedFull(6);
    setHideLoadMoreButton(false);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {data.slice(0, dataLoaded)?.map((game) => (
          <GameCard key={game?._id} game={game} />
        ))}
      </div>
      <div className="text-center pt-10">
        {hideLoadMoreButton ? (
          <button
            onClick={handleSeeLess}
            className="btn btn-sm border-none bg-secondary hover:bg-secondary text-black hover:text-black rounded-full"
          >
            See Less
          </button>
        ) : (
          <button
            onClick={handleLoadMore}
            className="btn btn-sm border-none bg-secondary hover:bg-secondary text-black hover:text-black rounded-full"
          >
            Load More
          </button>
        )}
      </div>
    </>
  );
};

export default FeaturedCollection;

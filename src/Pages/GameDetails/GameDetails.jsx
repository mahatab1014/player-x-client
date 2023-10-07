import { useLoaderData, useParams } from "react-router-dom";
import Slider from "./Slider/Slider";
import Review from "./Review";

const GameDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();

  const exactGameData = data.find((game_info) => game_info._slug === id);

  const {
    title,
    brief_description,
    long_description,
    gameplay_video,
    game_thumbnails,
    game_info,
    game_price,
    reviews,
  } = exactGameData;

  const ps4 = game_info.platforms.includes("PlayStation 4");
  const ps5 = game_info.platforms.includes("PlayStation 5");
  const xboxSeries = game_info.platforms.includes("Xbox Series X/S");
  const xboxOne = game_info.platforms.includes("Xbox One");
  const pc = game_info.platforms.includes("PC");

  return (
    <>
      <section>
        <Slider
          gameplay_video={gameplay_video}
          game_thumbnails={game_thumbnails}
        />
      </section>

      <section>
        <div className="container mx-auto py-10 px-5">
          <div className="section-title grid grid-cols-4 gap-5 items-center">
            <div className="col-span-3">
              <h1 className="text-3xl md:text-5xl font-medium">{title}</h1>
              <p className="text-lg py-2">{brief_description}</p>
            </div>
            <div>
              <div className="text-2xl">
                <span className="text-secondary">Price :</span>{" "}
                <span className="text-white">
                  ${game_price.toString().split(".")[0]}
                  <sup className="text-primary">
                    {game_price.toString().split(".")[1]}
                  </sup>
                </span>
              </div>
              <button className="btn btn-sm border-none bg-secondary hover:bg-secondary text-black hover:text-black rounded-none">
                Purchase
              </button>
            </div>
          </div>

          <div className="grid grid-cols-4 py-5 ">
            <aside>
              <h4 className="text-2xl text-white font-medium">Game Info :</h4>
              <div>
                <div>
                  <span className="text-secondary">Publisher</span> :{" "}
                  {game_info?.publisher}
                </div>
                <div>
                  <span className="text-secondary">Developer</span> :{" "}
                  {game_info?.developer}
                </div>
                <div>
                  <span className="text-secondary">Engine</span> :{" "}
                  {game_info?.engine}
                </div>
                <div>
                  <span className="text-secondary">Release Date</span> :{" "}
                  {game_info?.release_date}
                </div>
                <div>
                  <span className="text-secondary">Platforms</span> :{" "}
                  <div className="flex [&>img]:w-10 gap-3 ">
                    {ps4 && <img src="/images/icons/ps4.png" />}
                    {ps5 && <img src="/images/icons/ps5.png" />}
                    {xboxOne && <img src="/images/icons/xbox.png" />}
                    {xboxSeries && <img src="/images/icons/xbox.png" />}
                    {pc && <img src="/images/icons/computer.png" />}
                  </div>
                </div>
              </div>
            </aside>
            <article className="col-span-3">
              <h4 className="text-2xl text-white font-medium">Description :</h4>
              <p className="text-lg">{long_description}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="my-8 bg-base-300 ">
        <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
          <h1 className="p-4 text-4xl font-semibold leadi text-center">
            What our customers are saying about this game
          </h1>
        </div>
        <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
          <div className="grid grid-cols-2  shadow-lg">
            {reviews.map((review, index) => (
              <Review key={index} review={review} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GameDetails;

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FeaturedCollection from "../../Components/FeaturedCollection/FeaturedCollection";
import ServiceGrid from "../../Components/Services/ServiceGrid";
import Events from "./Events/Events";
import Slider from "./Slider/Slider";

const Home = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
    });
  }, []);
  return (
    <>
      <section
        data-aos="fade-in"
        className="[&>div]:!h-full sm:[&>div]:!h-[70vh]"
      >
        <Slider />
      </section>

      <section className="py-20 px-5">
        <div className="container mx-auto">
          <div data-aos="fade-in" className="section-title text-center">
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
          <div>
            <ServiceGrid />
          </div>
        </div>
      </section>

      <section className="py-20 bg-base-200 px-5 overflow-hidden">
        <div className="container mx-auto">
          <div data-aos="fade-right" className="section-title text-center">
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
          <div
            data-aos="fade-left"
            data-aos-offset="220"
            data-aos-duration="600"
          >
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
        </div>
      </section>

      <section className="py-20 px-5">
        <div className="container mx-auto">
          <div data-aos="fade-in" className="section-title text-center">
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
          <div data-aos="fade-up">
            <FeaturedCollection />
          </div>
        </div>
      </section>

      <section className="bg-base-200 overflow-hidden">
        <div className="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row">
          <div data-aos="fade-right" className="flex justify-center xl:w-1/2">
            <img
              className="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover rounded-full"
              src="https://images.unsplash.com/photo-1532295454114-d7bc89024613"
              alt=""
            />
          </div>

          <div
            data-aos="fade-left"
            className="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0"
          >
            <h2
              data-aos="fade-in"
              className="text-3xl md:text-5xl font-semibold uppercase text-white"
            >
              Download our <br />
              <span className="text-primary">mobile</span> app
            </h2>

            <p className="block font-light text-lg max-w-2xl mt-4 text-gray-500 dark:text-gray-300">
              Experience the ultimate convenience with our free mobile app.
              Download it now to unlock a world of possibilities right at your
              fingertips. Our app is designed to make your life easier and more
              enjoyable, offering a seamless and user-friendly experience. Stay
              connected, access exclusive content, and enjoy special features
              designed just for you. Whether you're on the go or relaxing at
              home, our app is your trusted companion. Get ready to elevate your
              experience—download our app today and see what awaits!
            </p>

            <div className="mt-6 sm:-mx-2 flex gap-2">
              <button className="custom-button flex items-center">
                <svg
                  className="w-8 h-8 mx-2 fill-current"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                  xmlSpace="preserve"
                >
                  <svg
                    className="w-5 h-5 mx-2 fill-current"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                  >
                    <g>
                      <g>
                        <path d="M407,0H105C47.103,0,0,47.103,0,105v302c0,57.897,47.103,105,105,105h302c57.897,0,105-47.103,105-105V105C512,47.103,464.897,0,407,0z M482,407c0,41.355-33.645,75-75,75H105c-41.355,0-75-33.645-75-75V105c0-41.355,33.645-75,75-75h302c41.355,0,75,33.645,75,75V407z"></path>
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M305.646,123.531c-1.729-6.45-5.865-11.842-11.648-15.18c-11.936-6.892-27.256-2.789-34.15,9.151L256,124.166l-3.848-6.665c-6.893-11.937-22.212-16.042-34.15-9.151h-0.001c-11.938,6.893-16.042,22.212-9.15,34.151l18.281,31.664L159.678,291H110.5c-13.785,0-25,11.215-25,25c0,13.785,11.215,25,25,25h189.86l-28.868-50h-54.079l85.735-148.498C306.487,136.719,307.375,129.981,305.646,123.531z"></path>
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M401.5,291h-49.178l-55.907-96.834l-28.867,50l86.804,150.348c3.339,5.784,8.729,9.921,15.181,11.65c2.154,0.577,4.339,0.863,6.511,0.863c4.332,0,8.608-1.136,12.461-3.361c11.938-6.893,16.042-22.213,9.149-34.15L381.189,341H401.5c13.785,0,25-11.215,25-25C426.5,302.215,415.285,291,401.5,291z"></path>
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M119.264,361l-4.917,8.516c-6.892,11.938-2.787,27.258,9.151,34.15c3.927,2.267,8.219,3.345,12.458,3.344c8.646,0,17.067-4.484,21.693-12.495L176.999,361H119.264z"></path>
                      </g>
                    </g>
                  </svg>
                </svg>

                <span className="mx-2">App Store</span>
              </button>

              <button className="custom-button flex items-center">
                <svg
                  className="w-8 h-8 mx-2 fill-current"
                  viewBox="-28 0 512 512.00075"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m432.320312 215.121094-361.515624-208.722656c-14.777344-8.53125-32.421876-8.53125-47.203126 0-.121093.070312-.230468.148437-.351562.21875-.210938.125-.421875.253906-.628906.390624-14.175782 8.636719-22.621094 23.59375-22.621094 40.269532v417.445312c0 17.066406 8.824219 32.347656 23.601562 40.878906 7.390626 4.265626 15.496094 6.398438 23.601563 6.398438s16.214844-2.132812 23.601563-6.398438l361.519531-208.722656c14.777343-8.53125 23.601562-23.8125 23.601562-40.878906s-8.824219-32.347656-23.605469-40.878906zm-401.941406 253.152344c-.21875-1.097657-.351562-2.273438-.351562-3.550782v-417.445312c0-2.246094.378906-4.203125.984375-5.90625l204.324219 213.121094zm43.824219-425.242188 234.21875 135.226562-52.285156 54.539063zm-6.480469 429.679688 188.410156-196.527344 54.152344 56.484375zm349.585938-201.835938-80.25 46.332031-60.125-62.714843 58.261718-60.773438 82.113282 47.40625c7.75 4.476562 8.589844 11.894531 8.589844 14.875s-.839844 10.398438-8.589844 14.875zm0 0"></path>
                </svg>

                <span className="mx-2">Google Play</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex overflow-hidden">
        <div className="w-full h-full absolute top-0 -z-50 flex">
          <div
            data-aos="fade-right"
            className="h-full bg-stone-950 md:w-3/4"
          ></div>
        </div>

        <div className="flex flex-col justify-center w-full px-4 py-10 md:mx-24">
          <h2 className="text-3xl md:text-5xl font-semibold uppercase text-white">
            What our <span className="text-primary">customers</span>{" "}
            <br className="hidden md:block" />
            are saying
          </h2>

          <div
            data-aos="fade-in"
            className="grid w-full grid-cols-1 gap-8 mt-8 2xl:grid-cols-4 lg:mt-16 md:grid-cols-2 lg:grid-cols-3"
          >
            <div className="w-full p-8 bg-white rounded-md shadow-lg dark:bg-gray-800">
              <p className="leading-loose text-gray-500 dark:text-gray-400">
                "I've been a gamer for years, and this gaming service has truly
                changed the way I play and interact with other gamers. It's a
                game-changer!"
              </p>

              <div className="flex items-center mt-6 -mx-2">
                <img
                  className="object-cover mx-2 rounded-full w-14 h-14"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                />

                <div className="mx-2">
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    Robbert
                  </h4>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    CTO, Robert Consultancy
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full p-8 bg-white rounded-md shadow-lg dark:bg-gray-800">
              <p className="leading-loose text-gray-500 dark:text-gray-400">
                "This gaming platform is a dream come true for any avid gamer.
                It offers a seamless experience and a fantastic community.
                Highly recommended!"
              </p>

              <div className="flex items-center mt-6 -mx-2">
                <img
                  className="object-cover mx-2 rounded-full w-14 h-14"
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
                  alt=""
                />

                <div className="mx-2">
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    Jeny Doe
                  </h4>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    CEO, Jeny Consultancy
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full p-8 bg-white rounded-md shadow-lg dark:bg-gray-800 md:hidden lg:block">
              <p className="leading-loose text-gray-500 dark:text-gray-400">
                "I've been using this gaming service for a while now, and I'm
                blown away by the quality and variety of games available. It's a
                gamer's paradise!"
              </p>

              <div className="flex items-center mt-6 -mx-2">
                <img
                  className="object-cover mx-2 rounded-full w-14 h-14"
                  src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />

                <div className="mx-2">
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    Mia Brown
                  </h4>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Marketing Manager at Stech
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full p-8 bg-white rounded-md shadow-lg dark:bg-gray-800 md:hidden 2xl:block">
              <p className="leading-loose text-gray-500 dark:text-gray-400">
                "As a developer and a gamer, I appreciate the effort put into
                this platform. It's a fantastic place to find and enjoy games."
              </p>

              <div className="flex items-center mt-6 -mx-2">
                <img
                  className="object-cover mx-2 rounded-full w-14 h-14"
                  src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />

                <div className="mx-2">
                  <h1 className="font-semibold text-gray-800 dark:text-white">
                    Lead Designer
                  </h1>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Developer at Stech
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="items-center hidden mt-12 md:flex">
            <button
              title="left arrow"
              className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover.bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

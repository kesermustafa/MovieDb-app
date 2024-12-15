import Hero from '../../components/hero';
import PopularList from '../../components/popular-list';
import TopRatedMovies from '../../components/top-rated';
import TrendingGenres from '../../components/trending-genres';

const Home = () => {
  return (
    <div className="">
      <div>
        <Hero />
      </div>
      <div className="relative">
        <div className=" max-sm:hidden !bg-[linear-gradient(270deg,rgba(251,248,239,1)5%,rgba(251,248,239,0.7)100%)] blur absolute top-0 bottom-0 right-0 !z-20 w-[50px]"></div>

        <div className="my-20 md:px-8  max-sm:ml-2">
          <h1 className="text-2xl lg:text-3xl font-semibold text-center mb-6">
            Popular Movies
          </h1>
          <PopularList category="popular" />
        </div>
        <div className="flex items-center justify-center">
          <div className="border-b-4 border-[var(--dark-blue)] border-dotted w-[60%]"></div>
        </div>
        <div className="mt-10 mb-20 md:px-8   max-sm:ml-2">
          <h1 className="text-2xl lg:text-3xl font-semibold text-center mb-6">
            Top Rated Movies
          </h1>
          <TopRatedMovies />
        </div>
        <div className="flex items-center justify-center">
          <div className="border-b-4 border-[var(--dark-blue)] border-dotted w-[60%]"></div>
        </div>
        <div className="my-10 md:px-8 w-full  max-sm:ml-2 mb-20">
          <h1 className="text-2xl lg:text-3xl font-semibold text-center ">
            Trending Categories
          </h1>
          <TrendingGenres />
        </div>
      </div>
    </div>
  );
};

export default Home;

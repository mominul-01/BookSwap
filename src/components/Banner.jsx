import bookswapbanner from "../assets/BookSwap.png";
const Banner = () => {
  return (
    <section className="container  bg-gray-100 py-12 ">
      <div
        className=" flex flex-col md:flex-row
       items-center justify-between px-6 md:px-12"
      >
        {/* Left side - Text content */}
        <div className="w-full mx-auto  md:w-1/2">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 ">
            <span className="text-center text-yellow-400">Welcome to</span>{" "}
            <br />
            <span className="text-6xl mx-5 text-red-600"> BookSwap</span>
          </h1>
          <p className="text-2xl text-gray-600 mt-6 mb-6">
            Discover, Share, and Swap Books with fellow readers.
          </p>
          <div className="space-x-4 mt-5">
            <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
              Sign Up
            </button>
            <button className="px-6 py-2 bg-transparent text-blue-600 border border-blue-600 font-semibold rounded-lg hover:bg-blue-50">
              Learn More
            </button>
          </div>
        </div>

        {/* Right side - Image */}
        <div className=" md:block w-full md:w-1/2">
          <img src={bookswapbanner} alt="Book swapping" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default Banner;

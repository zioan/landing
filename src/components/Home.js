import React from "react";
import "./Home.scss";

function Home() {
  return (
    <div
      className="relative overflow-hidden bg-no-repeat bg-cover home-header h-screen"
      id="home"
    >
      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed header-overlay">
        <div className="flex justify-center items-center h-full md:mr-36 ">
          <div className="px-6 py-4 md:px-12">
            <h1 className="text-heading-yellow text-5xl font-bold mt-0 mb-6">
              Beat the Heat In Hot <br></br>Summer!
            </h1>
            <p className="text-white mb-8">
              It is a long established fact that a reader will be distracted by
              the content.
            </p>
            <button
              type="button"
              className="inline-block px-6 py-2.5 border-2 border-heading-yellow text-heading-yellow font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              Find More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

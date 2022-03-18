import React from "react";
import Header1 from "../assets/header1.jpg";
import Header2 from "../assets/header2.jpg";

function Home() {
  return (
    <div
      id="carouselExampleCaptions home"
      className="carousel slide relative "
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
      </div>
      <div className="carousel-inner relative w-full overflow-hidden">
        <div className="carousel-item active relative float-left w-full">
          <img
            src={Header1}
            className="block w-full max-h-[700px] object-cover"
            alt="header1"
          />
          <div className="carousel-caption hidden md:block absolute text-center">
            <h1 className="text-xl">First slide label 1</h1>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div className="carousel-item relative float-left w-full">
          <img
            src={Header2}
            className="block w-full max-h-[700px] object-cover"
            alt="header2"
          />
          <div className="carousel-caption hidden md:block absolute text-center">
            <h1 className="text-xl">Second slide label 2</h1>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon inline-block bg-no-repeat bg-heading-yellow"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon inline-block bg-no-repeat bg-heading-yellow"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Home;

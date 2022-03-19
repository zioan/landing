import React from "react";
import AboutImg from "../assets/about.jpg";
// import "About.scss";

function About() {
  return (
    <div className="container px-4 py-16 lg:py-24 mx-auto" id="about">
      <div className="lg:flex lg:space-x-20 items-center justify-evenly">
        <section className="grow max-w-[550px]">
          <p className="text-heading-yellow text-xl mb-4">About us</p>
          <div className="heading">
            <h2 className="main">
              Cool Solutions,{" "}
              <span className="second">
                For <br />
                House & Office
              </span>
            </h2>
          </div>
          <p className="mb-8 ">
            Construction is an ancient humanity activity. It began with the
            pureley functional need for a controlls environment to moderate the
            effects of climate. Constructed shelters were one means by which
            human beings were ableto adapt Construction is an ancient humanity
            activity. It began with the pureley functional need for a
          </p>
          <button
            type="button"
            className="main-btn"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            Find More
          </button>
        </section>
        <div className="max-w-[550px] ">
          <img
            src={AboutImg}
            alt="about img"
            className=" mt-10 lg:mt-0 mx-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default About;

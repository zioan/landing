import React from "react";
import Gallery1 from "../assets/gallery (1).jpg";
import Gallery2 from "../assets/gallery (2).jpg";
import Gallery3 from "../assets/gallery (3).jpg";

function Gallery() {
  return (
    <div className="container  mx-auto" id="gallery">
      <div className="text-center px-4 py-16 lg:py-24">
        <div className="heading">
          <h2 className="main">
            Our <span className="second">Gallery</span>
          </h2>
        </div>
        <p className=" max-w-lg mx-auto">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab deserunt
          hic natus eum adipisci optio maxime itaque et.Lorem ipsum dolor sit
          amet
        </p>
      </div>
      <section>
        <div className="lg:flex lg:space-x-6 mx-auto items-center justify-center">
          <div>
            <div className="relative overflow-hidden bg-no-repeat bg-cover max-w-md my-6 mx-auto lg:mx-0">
              <img
                src={Gallery2}
                className="max-w-md hover:scale-110 transition duration-300 ease-in-out cursor-pointer"
                alt="Louvre"
              />
            </div>
          </div>
          <div className="">
            <div className="relative overflow-hidden bg-no-repeat bg-cover max-w-md mb-6 mx-auto lg:mx-0">
              <img
                src={Gallery3}
                className="max-w-md hover:scale-110 transition duration-300 ease-in-out cursor-pointer"
                alt="Louvre"
              />
            </div>
            <div className="relative overflow-hidden bg-no-repeat bg-cover max-w-md mx-auto lg:mx-0">
              <img
                src={Gallery1}
                className="max-w-md hover:scale-110 transition duration-300 ease-in-out cursor-pointer"
                alt="Louvre"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;

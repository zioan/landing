import React from "react";
import "./Gallery.scss";
import Gallery1 from "../assets/gallery (1).jpg";
import Gallery2 from "../assets/gallery (2).jpg";
import Gallery3 from "../assets/gallery (3).jpg";

function Gallery() {
  return (
    <>
      <div className="container  mx-auto mb-10" id="gallery">
        <div className="text-center px-4 py-16 lg:py-24">
          <div className="heading">
            <h2 className="main">
              Our <span className="second">Gallery</span>
            </h2>
          </div>
          <p className=" max-w-lg mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
            deserunt hic natus eum adipisci optio maxime itaque et.Lorem ipsum
            dolor sit amet
          </p>
        </div>
        <section>
          <div className="lg:flex lg:space-x-6 mx-auto items-center justify-center p-2">
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

      <div className="relative overflow-hidden bg-no-repeat bg-cover gallery-header h-[50vh]">
        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed header-overlay">
          <div className="flex justify-center items-center h-full md:mr-36 ">
            <div className="px-6 py-4 md:px-12">
              <p className="text-transparent cursor-default text-2xl">&nbsp;</p>
              <p className="text-transparent cursor-default text-2xl">&nbsp;</p>
              <p className="text-transparent cursor-default text-2xl">&nbsp;</p>
              <p className="text-transparent cursor-default text-2xl">&nbsp;</p>
              <p className="text-transparent cursor-default text-2xl">&nbsp;</p>

              <h1 className="text-heading-yellow text-5xl font-bold mt-0 mb-6">
                <span className=" text-heading-color">Don't </span>
                <br /> wait the Summer!
              </h1>
              <h1 className="text-heading-yellow text-5xl font-bold -mt-10 mb-6">
                <br />
                Prepare for Summer!
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;

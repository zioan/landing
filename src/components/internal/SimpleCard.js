import React from "react";
// import "SimpleCard.scss";

function SimpleCard({ path, title, description }) {
  return (
    <div className="grow-1 ">
      <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-[370px]">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img className="rounded-t-lg" src={path} alt="services" />
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
            <p className="text-gray-700 text-base mb-4">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SimpleCard;

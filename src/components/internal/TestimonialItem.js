import React from "react";

function TestimonialItem({ img, name, description }) {
  return (
    <div className="flex max-w-[500px] mx-auto">
      <div className="max-w-3xl">
        <div className="block p-6 rounded-lg shadow-lg bg-white m-4">
          <div className="md:flex md:flex-row">
            <div className="md:w-96 w-36 flex justify-center items-center mb-6 lg:mb-0 mx-auto md:mx-0">
              <img src={img} className="rounded-full shadow-md" alt="avatar" />
            </div>
            <div className="md:ml-6">
              <p className="text-gray-500 font-light mb-6">"{description}"</p>
              <p className="font-semibold text-xl mb-2 text-gray-800">{name}</p>
              {/* <p className="font-semibold text-gray-500 mb-0">
                Product manager
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialItem;

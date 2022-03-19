import React, { useState } from "react";

function TeamCard({ img, name, description }) {
  const [displayName, setDisplayName] = useState(false);

  return (
    <div className="relative overflow-hidden bg-no-repeat bg-cover max-w-fit lg:max-w-md my-6 mx-auto lg:mx-0 shadow">
      <img
        src={img}
        className=" relative hover:scale-110 transition duration-300 ease-in-out mx-auto cursor-pointer"
        alt="team"
        onMouseEnter={() => setDisplayName(true)}
        onMouseLeave={() => setDisplayName(false)}
      />
      {displayName && (
        <div
          className="absolute bottom-0 left-0 w-full py-2  bg-main-yellow  cursor-pointer"
          onMouseEnter={() => setDisplayName(true)}
          onMouseLeave={() => setDisplayName(false)}
        >
          <h3 className="text-center text-xl text-heading-color">{name}</h3>
          <p className="text-center text-white">{description}</p>
        </div>
      )}
    </div>
  );
}

export default TeamCard;

import React from "react";
import SimpleCard from "./internal/SimpleCard";
import Services1 from "../assets/services (1).jpg";
import Services2 from "../assets/services (2).jpg";
import Services3 from "../assets/services (3).jpg";
import Services4 from "../assets/services (4).jpg";
import Services5 from "../assets/services (5).jpg";
import Services6 from "../assets/services (6).jpg";

function Services() {
  const servicesData = [
    {
      img: Services1,
      title: "Air Conditioner Maintenance",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: Services2,
      title: "Ductless Split AC System",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: Services3,
      title: "Ait Conditioner Replacement",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: Services4,
      title: "Water Heater repair & Replacement",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: Services5,
      title: "Comercial AC Maintenance",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: Services6,
      title: "Commercial Furnace Maintenance",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  return (
    <div className="container px-4 py-16 lg:py-24 mx-auto" id="services">
      <div className="text-center">
        <div className="heading">
          <h2 className="main">
            Our <span className="second">Services</span>
          </h2>
        </div>
        <p className=" max-w-lg mx-auto">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab deserunt
          hic natus eum adipisci optio maxime itaque et.Lorem ipsum dolor sit
          amet
        </p>
      </div>

      <section className=" flex gap-6 flex-wrap  items-center justify-center mt-20">
        {servicesData.map((service) => {
          return (
            <SimpleCard
              key={service.title}
              path={service.img}
              title={service.title}
              description={service.description}
            />
          );
        })}
      </section>
    </div>
  );
}

export default Services;

import React from "react";
import PricingItem from "./internal/PricingItem";

function Pricing() {
  const silverPlan = ["Indoor Air Quality", "Heater Repair", "Boilers"];
  const goldPlan = [
    "Indoor Air Quality",
    "Heater Repair",
    "Boilers",
    "Heat Pumps",
    "Furnace Maintenance",
  ];
  const diamondPlan = [
    "Indoor Air Quality",
    "Heater Repair",
    "Boilers",
    "Furnace Maintenance",
    "Emergency HVAC Services",
    "Heat Pumps",
    "Furnace Maintenance",
  ];

  return (
    <div className="container  mx-auto" id="pricing">
      <div className="text-center px-4 py-16 lg:py-24">
        <div className="heading">
          <h2 className="main">
            Our <span className="second">Pricing</span>
          </h2>
        </div>
        <p className=" max-w-lg mx-auto">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab deserunt
          hic natus eum adipisci optio maxime itaque et.Lorem ipsum dolor sit
          amet
        </p>
      </div>

      {/* pricing */}
      <section className="container text-heading-color mx-auto">
        <div className="inline lg:flex flex-wrap gap-2 lg:gap-1 justify-center">
          <PricingItem
            title="Silver Plan"
            description="It is a long established fact that a reader will be distracted."
            price="29.65"
            listItems={silverPlan}
            feature={false}
          />
          <PricingItem
            title="Diamond Plan"
            description="It is a long established fact that a reader will be distracted."
            price="85.67"
            listItems={diamondPlan}
            feature={true}
          />
          <PricingItem
            title="Gold Plan"
            description="It is a long established fact that a reader will be distracted."
            price="50.76"
            listItems={goldPlan}
            feature={false}
          />
        </div>
      </section>
    </div>
  );
}

export default Pricing;

import React from "react";
import TestimonialItem from "./internal/TestimonialItem";
import Testimonial1 from "../assets/testimonial (1).jpg";
// import Testimonial2 from "../assets/testimonial (2).jpeg";
import Testimonial3 from "../assets/testimonial (3).jpg";
import Testimonial4 from "../assets/testimonial (4).jpg";

function Testimonial() {
  return (
    <div
      className="container lg:flex mt-16 lg:mt-36 mx-auto lg:py-0 "
      id="testimonial"
    >
      <div className="px-2 py-4 lg:py-0 mx-auto">
        <div className="heading m-0 lg:mt-10 max-w-[500px] mx-auto">
          <h2 className="main">
            Our <span className="second">Testimonials</span>
          </h2>
          <p className="mt-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
            deserunt hic natus eum adipisci optio maxime itaque et.Lorem ipsum
            dolor sit amet It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s
          </p>
          <br />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. standard dummy text ever since the 1500s.
          </p>
        </div>
      </div>
      <div className="mx-auto">
        {/* <TestimonialItem
          img={Testimonial2}
          name="Linda Smith"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
          deserunt hic natus eum adipisci optio maxime itaque et."
        /> */}

        <TestimonialItem
          img={Testimonial1}
          name="Bob Jones"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
          deserunt hic natus eum adipisci optio maxime itaque et."
        />
        <TestimonialItem
          img={Testimonial4}
          name="Martina Anderson"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
          deserunt hic natus eum adipisci optio maxime itaque et."
        />
        <TestimonialItem
          img={Testimonial3}
          name="Jessica Tailer"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
          deserunt hic natus eum adipisci optio maxime itaque et."
        />
      </div>
    </div>
  );
}

export default Testimonial;

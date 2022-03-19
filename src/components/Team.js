import React from "react";
import Team1 from "../assets/team (1).jpg";
import Team2 from "../assets/team (2).jpg";
import Team3 from "../assets/team (3).jpg";
import Team4 from "../assets/team (4).jpg";
import TeamCard from "./internal/TeamCard";

function Team() {
  return (
    <div className="container mx-auto lg:flex justify-center " id="team">
      <div className="px-4 py-16 lg:py-24 ">
        <div className="heading">
          <p className="text-heading-yellow text-xl mb-4">Meet Our Team</p>
          <h2 className="main">
            Meet Our <span className="second">Creative</span> <br /> Team
          </h2>
        </div>
      </div>
      <div>
        <section className=" lg:mt-40 lg:-ml-40 mt-2 ml-0">
          <div className="lg:flex lg:space-x-6 mx-auto items-center justify-center">
            <div>
              <TeamCard
                img={Team1}
                name="John Nelson"
                description="AC Specialist"
              />
            </div>
            <div className="">
              <TeamCard
                img={Team2}
                name="Tom Hardy"
                description="AC Specialist"
              />
              <TeamCard
                img={Team3}
                name="Mark Abell"
                description="AC Specialist"
              />
            </div>
            <div>
              <TeamCard
                img={Team4}
                name="David William"
                description="AC Specialist"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Team;

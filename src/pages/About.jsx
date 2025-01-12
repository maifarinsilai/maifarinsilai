import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us
          </h1>
          <p>
    Welcome to Mai Farinsilai Travel and Tour, where every destination becomes a story worth telling. Our mission is to turn every journey into a memorable adventure filled with cultural discovery, breathtaking sights, and personalized experiences. We are committed to crafting unique travel itineraries that cater to the diverse needs of our clients, ensuring comfort, safety, and unforgettable memories at every stop.
  </p>
  <br />
  <p>
    Founded with a passion for exploration and a love for storytelling, Mai Farinsilai Travel and Tour bridges the gap between wanderlust and authentic travel experiences. Whether you're seeking serene landscapes, vibrant city life, or cultural heritage sites, our dedicated team works tirelessly to bring your travel dreams to life. We believe that travel is more than just visiting new places it's about creating stories that resonate for a lifetime.
  </p>
  <br />
  <p>
    Join us as we embark on unforgettable journeys, explore hidden gems, and discover the world with fresh perspectives. With Mai Farinsilai Travel and Tour, every destination is more than a place it's a story waiting to be told.
  </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
            suscipit minus similique aliquam recusandae quisquam id nulla
            tempora voluptate vero.
          </p>
        </div>
      </div>
      <Location />
      <BlogsComp />
    </>
  );
};

export default About;

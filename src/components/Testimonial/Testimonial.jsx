import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Aisha Bello",
    text: "Mai Farinsilai Travel and Tour made my dream vacation a reality. Their attention to detail, excellent customer service, and well-organized travel plans made the entire experience unforgettable.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 1,
    name: "Abubakar Sani",
    text: "I was truly impressed by the professionalism and commitment of Mai Farinsilai Travel and Tour. They listened carefully to my needs and provided a tailored package that fit my busy schedule.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 1,
    name: "Zainab Abdullahi",
    text: "Traveling has never been this easy and enjoyable for me! Mai Farinsilai Travel and Tour took care of every detail, allowing me to relax and fully enjoy my trip.",
    img: "https://picsum.photos/103/103",
  },

  {
    id: 1,
    name: "Muhammad Lawal",
    text: "From the moment I booked my trip with Mai Farinsilai Travel and Tour, everything was flawless. Their team was incredibly organized, and I appreciated how they communicated every update.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 1,
    name: "Fatima Umar",
    text: "Mai Farinsilai Travel and Tour provided a personalized service that made me feel truly valued. They understood my travel style and created an itinerary that perfectly matched my taste.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 1,
    name: "Nasir Musa",
    text: "As a student, I needed an affordable yet exciting travel experience, and Mai Farinsilai Travel and Tour delivered beyond my expectations. Their affordable packages didn’t compromise on quality.",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10">
        <div className="container">
          {/* Header section */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Testimonial
            </p>
            <h1 className="text-3xl font-bold">Testimonial</h1>
            <p className="text-xs text-gray-400">
              {" "}
              A testimonial is a genuine statement or endorsement from a satisfied customer, client, or user sharing their positive experience with a product, service, or brand.
            </p>
          </div>
          {/* testimonial section */}
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[800px] mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map(({ id, name, text, img }) => {
                return (
                  <div key={id} className="my-6">
                    <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                      <img
                        src={img}
                        alt=""
                        className="rounded-full block mx-auto"
                      />
                      <h1 className="text-xl font-bold">{name}</h1>
                      <p className="text-gray-500 text-sm">{text}</p>
                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;

import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/kuwait.jpg";
import Img2 from "../../assets/places/muscat.jpg";
import Img3 from "../../assets/places/mecca.jpg";
import Img4 from "../../assets/places/doha.jpg";
import Img5 from "../../assets/places/manama.jpg";
import Img6 from "../../assets/places/dubai.jpg";

const PlacesData = [
  {
    img: Img1,
    title: "Kuwait City",
    location: "Kuwait",
    description: "A thriving hub of modernity blended with rich cultural heritage, Kuwait City offers a mix of luxury, history, and unique experiences.",
    price: 4_500_000,  // 3,200,000 (Kuwaiti Dinar)
    type: "Cultural Relax",
  },
  {
    img: Img2,
    title: "Muscat",
    location: "Oman",
    description: "Muscat, Oman’s capital, offers serene landscapes, beautiful beaches, and a rich cultural heritage, perfect for a peaceful getaway.",
    price: 4_500_000,  // 3,500,000 (Omani Rial)
    type: "Cultural Relax",
  },
  {
    img: Img3,
    title: "Mecca",
    location: "Saudi Arabia",
    description: "The holiest city in Islam, Mecca is home to the sacred Kaaba and a must-visit for those seeking spiritual enrichment.",
    price: 4_500_000,  // 4,100,000 (Saudi Riyal)
    type: "Spiritual Journey",
  },
  {
    img: Img4,
    title: "Doha",
    location: "Qatar",
    description: "Doha is a stunning blend of traditional culture and modern sophistication, offering world-class museums, shopping, and dining.",
    price: 4_500_000,  // 3,800,000 (Qatari Riyal)
    type: "Luxury Exploration",
  },
  {
    img: Img5,
    title: "Manama",
    location: "Bahrain",
    description: "Bahrain's capital, Manama, is a dynamic city that mixes modern luxury with ancient cultural treasures, perfect for exploring history and arts.",
    price: 4_500_000,  // 3,300,000 (Bahraini Dinar)
    type: "Cultural Escape",
  },
  {
    img: Img6,
    title: "Dubai",
    location: "United Arab Emirates",
    description: "Dubai is a world-renowned city of innovation, luxury, and adventure, featuring iconic landmarks like the Burj Khalifa and Palm Jumeirah.",
    price: 4_500_000,  // 5,500,000 (UAE Dirham)
    type: "Luxury Adventure",
  }
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Places to Visit
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;

import React from "react";
import { FaSuitcase } from "react-icons/fa6";
import { FaChartBar } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaGlobeAmericas } from "react-icons/fa";
import Slider from "react-slick";

export default function Business() {
  const mappingValues = [
    {
      id: 1,
      name: "184+ Projects Executed",
      icon: <FaSuitcase size={24} />,
    },
    {
      id: 2,
      name: "56+ Brands Elevated Worldwide",
      icon: <FaChartBar size={24} />,
    },
    {
      id: 3,
      name: "INR 19 Crore+ Revenue Facilitated",
      icon: <FaIndianRupeeSign size={24} />,
    },
    {
      id: 4,
      name: "Operational across 12+ countries",
      icon: <FaGlobeAmericas size={24} />,
    },
  ];

  const images = [
    {
      id: 1,
      url: "https://fluxatic.com/wp-content/uploads/2024/07/India-Beach-Fashion-Week-Fluxatic-Global-Formerly-CreativeJoule-1024x614.webp",
    },
    {
      id: 2,
      url: "https://fluxatic.com/wp-content/uploads/2024/07/Spectrum-Technology-Festival-Goa-Judging-Fluxatic-Global-Formerly-CreativeJoule-1024x614.webp",
    },
    {
      id: 3,
      url: "https://fluxatic.com/wp-content/uploads/2024/07/G20-International-Summit-Goa-Meetings-Fluxatic-Global-Formerly-CreativeJoule-1024x614.webp",
    },
    {
      id: 4,
      url: "https://fluxatic.com/wp-content/uploads/2024/07/Seminar-on-Modern-Technologies-Fluxatic-Global-Formerly-CreativeJoule-1024x614.webp",
    },
    {
      id: 5,
      url: "https://fluxatic.com/wp-content/uploads/2024/07/2023-Engineering-Internship-Programme-Fluxatic-Global-Formerly-CreativeJoule-1024x614.webp",
    },
    {
      id: 6,
      url: "https://fluxatic.com/wp-content/uploads/2024/07/Seminar-on-Modern-Technologies-Metaverse-Fluxatic-Global-Formerly-CreativeJoule-1024x614.webp",
    },
  ];

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full p-4 flex flex-col gap-10">
      <h2 className="text-[45px] md:text-[60px] lg:text-[75px] leading-none font-thin text-center">
        We&apos;re Digital Alchemists on a mission to Elevate Businesses
        Worldwide
      </h2>
      <h4 className="text-[14px] md:text-[18px] font-thin text-center">
        In the fast-paced & immersive digital world of today, Fluxatic Global is
        your strategic partner, committed to helping your business reach its
        full potential and achieve remarkable success. Every idea, pixel & line
        of code is meticulously tailored to create long-term impact on you and
        the world.
      </h4>
      <h4 className="text-[14px] md:text-[18px] font-thin text-center">
        You grow, we grow.
      </h4>
      <div className="flex flex-wrap sm:flex-nowrap gap-4 justify-center">
        {mappingValues.map((item) => (
          <div key={item.id} className="flex gap-2 items-center">
            <div>{item.icon}</div>
            <div className="text-[14px] md:text-[18px] font-extralight">
              {item.name}
            </div>
          </div>
        ))}
      </div>
      <div className="w-full">
        <Slider {...settings}>
          {images.map((image) => (
            <div key={image.id} className="px-6">
              <img
                src={image.url}
                alt={`Image ${image.id}`}
                className="w-full h-auto rounded-xl"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

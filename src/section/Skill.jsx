import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import icon atau gambar skill
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaNpm,
} from "react-icons/fa";
import { GiBorderedShield } from "react-icons/gi";
import { TbBrandTailwind, TbBrandVite } from "react-icons/tb";
import { SiEslint, SiExpress, SiPostgresql } from "react-icons/si";

const Skill = () => {
  const colors = [
    "text-red-600 border-red-600",
    "text-blue-600 border-blue-600",
    "text-yellow-600 border-yellow-600",
    "text-blue-600 border-blue-600",
    "text-green-600 border-green-600",
    "text-blue-600 border-blue-600",
    "text-yellow-600 border-yellow-600",
    "text-red-600 border-red-600",
    "text-white border-white",
    "text-blue-600 border-blue-600",
    "text-red-600 border-red-600",
    "text-gray-600 border-gray-600",
    "text-blue-600 border-blue-600",
  ];
  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 />,
      path: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      name: "CSS",
      icon: <FaCss3Alt />,
      path: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      path: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    { name: "React", icon: <FaReact />, path: "https://reactjs.org" },
    { name: "Node.js", icon: <FaNodeJs />, path: "https://nodejs.org" },
    {
      name: "Tailwind CSS",
      icon: <TbBrandTailwind />,
      path: "https://tailwindcss.com",
    },
    {
      name: "Vite",
      icon: <TbBrandVite />,
      path: "https://vitejs.dev",
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
      path: "https://git-scm.com",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      path: "https://github.com",
    },
    {
      name: "ESLint",
      icon: <SiEslint />,
      path: "https://eslint.org",
    },
    {
      name: "npm",
      icon: <FaNpm />,
      path: "https://www.npmjs.com",
    },
    {
      name: "Express",
      icon: <SiExpress />,
      path: "https://expressjs.com",
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql />,
      path: "https://www.postgresql.org",
    },
  ];
  // Pengaturan slider
  const settings = {
    dots: true, // menampilkan dot di bawah slider
    infinite: true, // slider berputar tanpa henti
    speed: 500, // kecepatan perpindahan slide
    slidesToShow: 3, // jumlah slide yang ditampilkan sekaligus
    slidesToScroll: 1, // jumlah slide yang di-scroll per kali
    autoplay: true, // slide otomatis berpindah
    autoplaySpeed: 1500, // waktu tunggu sebelum pindah slide
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen text-green-600">
      <div className="text-justify mt-24 items-center">
        <h1 className="text-xl items-center md:text-2xl lg:text-5xl font-bold underline flex gap-2 md:gap-4">
          <GiBorderedShield />
          My Skill
        </h1>
      </div>
      <div className="items-center justify-center">
        <h1 className="text-lg items-center md:text-xl lg:text-2xl mt-24 font-bold">
          This is what i've learned
        </h1>
        <Slider {...settings} className="mt-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`flex flex-col justify-center items-center text-center px-5 ${
                colors[index % 13]
              }`}
            >
              <a
                href={skill.path}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col hover:underline focus:underline justify-center items-center text-center px-5 py-32 md:py-10 border-8 ${
                  colors[index % 13]
                }`}
              >
                <h1 className="text-7xl md:text-9xl">{skill.icon}</h1>
                <h1 className="text-lg md:text-2xl font-semibold">
                  {skill.name}
                </h1>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Skill;

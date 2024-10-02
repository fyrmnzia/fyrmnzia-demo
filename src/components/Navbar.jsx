import React, { useEffect, useState } from "react";
import {
  GiBorderedShield,
  GiCastle,
  GiClosedBarbute,
  GiCrossedSwords,
  GiTrumpet,
} from "react-icons/gi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Tambahkan array warna untuk setiap item
  const colors = [
    "text-red-500",
    "text-blue-500",
    "text-green-500",
    "text-yellow-500",
    "text-purple-500",
  ];

  const navItems = [
    { name: "Home", path: "home", icon: <GiCastle /> },
    { name: "About", path: "about", icon: <GiClosedBarbute /> },
    { name: "Skill", path: "skill", icon: <GiBorderedShield /> },
    { name: "Project", path: "project", icon: <GiCrossedSwords /> },
    { name: "Contact", path: "contact", icon: <GiTrumpet /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPos = window.scrollY + 200;

      sections.forEach((section, index) => {
        if (
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-10 p-4 bg-[rgba(0,0,0,0.1)] backdrop-blur-sm
    border-b-2 border-[rgba(0,0,0,0.1)]"
    >
      <div className="flex justify-center">
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            spy={true}
            smooth={true}
            duration={300}
            onClick={() => setActiveIndex(index)}
            className={`relative flex gap-1 items-center md:gap-2 mx-auto text-white text-base md:text-3xl cursor-pointer font-semibold ${
              index === activeIndex
                ? "underline scale-110"
                : "hover:underline transition-all"
            } ${colors[index % colors.length]}`} // Menambahkan warna berbeda untuk setiap item
            aria-current={index === activeIndex ? "page" : undefined}
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

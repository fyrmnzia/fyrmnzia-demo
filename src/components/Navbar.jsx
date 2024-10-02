import React, { useEffect, useState } from "react";
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
    { name: "Home", path: "home" },
    { name: "About", path: "about" },
    { name: "Skill", path: "skill" },
    { name: "Project", path: "project" },
    { name: "Contact", path: "contact" },
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
    <nav className="fixed top-0 left-0 right-0 z-10 p-4 bg-[rgba(0,0,0,0.1)] backdrop-blur-sm">
      <div className="flex justify-center gap-4 md:gap-10">
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            spy={true}
            smooth={true}
            duration={300}
            onClick={() => setActiveIndex(index)}
            className={`relative text-white px-3 py-2 text-base md:text-3xl cursor-pointer ${
              index === activeIndex
                ? "underline"
                : "hover:underline transition-all"
            } ${colors[index % colors.length]}`} // Menambahkan warna berbeda untuk setiap item
            aria-current={index === activeIndex ? "page" : undefined}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

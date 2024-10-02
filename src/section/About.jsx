import React from "react";
import { GiClosedBarbute } from "react-icons/gi";

const About = () => {
  return (
    <div className="flex min-h-screen text-blue-600">
      <div className="text-justify mt-24">
        <h1 className="text-xl items-center md:text-2xl lg:text-5xl font-bold underline flex gap-2 md:gap-4">
          <GiClosedBarbute />
          About Me
        </h1>
        <div className="flex flex-col md:flex-row mt-5 justify-center items-center md:justify-normal md:items-start mx-auto">
          <div className="mt-5 w-full md:w-1/2">
            <div className="flex flex-col w-full md:w-3/4 justify-center items-center">
              <img
                src="/profile.png"
                alt="profile"
                className="border-8 w-3/4 md:w-full border-blue-600"
              />
              <div className="py-2 px-11 border-l-8 border-blue-600 border-b-8 border-r-8">
                <h1 className="text-xl text-center md:text-2xl lg:text-3xl font-semibold">
                  Rifqi Firmansyah
                </h1>
              </div>
            </div>
          </div>
          <div className="mt-5 w-full items-center justify-center ml-5">
            <div className="ml-5 md:ml-0 ">
              <h1 className="text-xl md:text-2xl lg:text-3xl underline font-semibold">
                Profile
              </h1>
              <p className="text-base md:text-xl lg:text-2xl mt-2">
                Hi!, my name is Rifqi Firmansyah (Fyrmnzia). I'm from Sumedang,
                Jawa Barat, Indonesia. I'm a high school graduate from SMA
                Negeri jatinangor in 2023. I'm a web developer and also
                administrator.
              </p>
              <h1 className="mt-5 text-xl md:text-2xl lg:text-3xl underline font-semibold">
                Education
              </h1>
              <p className="text-base md:text-xl lg:text-2xl mt-2">
                Since I graduated from high school, I have studied web
                development self-taught by watching learning videos, such as
                HTML, CSS, and even JavaScript.
              </p>
              <h1 className="mt-5 text-xl md:text-2xl lg:text-3xl underline font-semibold">
                Ambition
              </h1>
              <p className="text-base md:text-xl lg:text-2xl mt-2">
                As a passionate front-end developer, I am driven by the ambition
                to continuously evolve in the ever-changing world of technology.
                My goal is to create seamless, intuitive user experiences
                through clean, efficient code. Every project I take on is an
                opportunity to push the boundaries of design and functionality,
                ensuring that my work not only meets the expectations but also
                surprises and delights users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

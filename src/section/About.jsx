import React from "react";

const About = () => {
  return (
    <div className="flex min-h-screen text-blue-600">
      <div className="text-justify mt-24">
        <h1 className="text-xl md:text-2xl lg:text-5xl font-bold underline">
          About Me
        </h1>
        <div className="flex flex-col md:flex-row mt-5 justify-center items-center md:justify-normal md:items-start mx-auto">
          <div className="mt-5 w-full md:w-1/2">
            <div className="flex w-full md:w-3/4 justify-center items-center">
              <img
                src="/profile.png"
                alt="profile"
                className="border-8 w-1/2 md:w-full border-blue-600"
              />
            </div>
          </div>
          <div className="mt-5 w-full items-center justify-center ml-5">
            <h1 className="text-xl md:text-2xl lg:text-3xl underline font-semibold">
              Profile
            </h1>
            <p className="text-base md:text-xl lg:text-2xl">
              Hi!, my name is Rifqi Firmansyah (Fyrmnzia). I'm from Sumedang,
              Jawa Barat, Indonesia. I'm a high school graduate from SMA Negeri
              jatinangor in 2023. I'm a web developer and also administrator.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

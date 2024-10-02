import React from "react";
import Typing from "react-typing-effect";

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen mx-20 text-red-600">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold">
          <Typing
            text={[
              "Hello!",
              "I'm Fyrmnzia",
              "I'm Web Developer",
              "And Administrator",
            ]}
            speed={200} // Kecepatan mengetik
            eraseSpeed={50} // Kecepatan menghapus teks
            eraseDelay={2000} // Waktu jeda sebelum teks dihapus
            typingDelay={500} // Waktu jeda sebelum mulai mengetik
            cursor="|" // Karakter kursor yang ingin ditampilkan
          />
        </h1>
      </div>
    </div>
  );
};

export default Home;

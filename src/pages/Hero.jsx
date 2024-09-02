import React, { useState } from "react";
import backgroundImg from "/leonardp.png";

export const Hero = () => {
  const [activePage, setActivePage] = useState("index.html");

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center sm:bg-top md:bg-center"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-t from-white/90 to-transparent"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
          The Painters Symphony
        </h1>
        <p className="mt-3 text-lg md:text-xl">
          Discover the World of Painters and Their Artistic Masterpieces.
        </p>
      </div>

      <div className="relative bottom-32 md:bottom-40 left-0 w-full flex flex-col items-center p-2 md:p-6 py-10">
        <div className="bg-primary text-white pt-2 px-6 md:px-20 rounded-t-2xl shadow-lg text-center">
          <h5 className="text-2xl font-semibold mb-4">Painters</h5>
        </div>

        <div className="bg-white/80 text-primary bg-opacity-75 rounded-3xl shadow-lg w-full md:max-w-5xl text-center p-3 md:p-8">
          <div className="flex gap-2 md:gap-7 text-xs md:text-2xl">
            {[
              { href: "index.html", name: "Leonardo Da Vinci" },
              { href: "2-vincent.html", name: "Vincent Van Gogh" },
              { href: "3-pablopicasso.html", name: "Pablo Picasso" },
              {
                href: "4-michaelangelo.html",
                name: "Michaelangelo Buonarroti",
              },
              { href: "5-salvador.html", name: "Salvador Dali" },
            ].map(({ href, name }) => (
              <a
                key={href}
                href={href}
                className={`block py-2 md:px-4 rounded-2xl transition-all duration-300 ${
                  activePage === href
                    ? "bg-primary text-white px-2 md:px-10"
                    : "text-primary hover:bg-gray-200"
                }`}
                onClick={() => setActivePage(href)}
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

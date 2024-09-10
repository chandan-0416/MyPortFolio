/* eslint-disable no-unused-vars */
import React from "react";
import amazon from "../../public/amazon.png";
import spotify from "../../public/spotify.jpg";
import Temperature from "../../public/Temperature.jpg";
import GoogleKeep from "../../public/GoogleKeep.png";
function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: amazon,
      name: "Amazon",
    },
    {
      id: 2,
      logo: spotify,
      name: "Spotify",
    },
    {
      id: 3,
      logo: Temperature,
      name: "Temperature",
    },
    {
      id: 4,
      logo: GoogleKeep,
      name: "Google Keep Notes",
    },
  ];
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className=" underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name, code }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">
                 
                </p>
              </div>
              <div className=" px-6 py-4 space-x-3 justify-around">{code}
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                <a href="https://github.com/chandan-0416/" target="_blank">Source code</a>
                
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;




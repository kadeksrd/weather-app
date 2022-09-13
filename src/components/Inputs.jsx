import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

function Inputs({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");

  // units method
  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  // search method
  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  // location method
  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  // const input = document.querySelector(".input");
  // input.addEventListener("keypress", (e) => {
  //   if (e.key === "Enter") {
  //     setCity(e.target.value);
  //   }
  // });

  return (
    <div className="flex flex-row justify-center my-12">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          placeholder="Search for City ..."
          className="text-base font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercas input"
        />
        <UilSearch
          size={25}
          className="text-white cursor-pointer trasisition ease-out hover:scale-150"
          onClick={handleSearchClick}
        />
        <UilLocationPoint
          size={25}
          className="text-white cursor-pointer trasisition ease-out hover:scale-150"
          onClick={handleLocationClick}
        />
      </div>
      <div className="flex flex-row ml-10  items-center justify-center">
        <button
          name="metric"
          className="text-xl text-white font-light transistion ease-out hover:scale-125"
          onClick={handleUnitsChange}
        >
          °C
        </button>
        <p className="text-xl text-white px-2">|</p>
        <button
          name="imperial"
          className="text-xl text-white font-light transistion ease-out hover:scale-125"
          onClick={handleUnitsChange}
        >
          °F
        </button>
      </div>
    </div>
  );
}

export default Inputs;

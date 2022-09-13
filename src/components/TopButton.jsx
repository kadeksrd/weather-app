import React from "react";

function TopButton({ setQuery }) {
  const Cities = [
    {
      id: 1,
      title: "Medan",
    },
    {
      id: 2,
      title: "Jakarta",
    },
    {
      id: 3,
      title: "Surabaya",
    },
    {
      id: 4,
      title: "Denpasar",
    },
  ];

  return (
    <div className="flex item-center justify-around my-6">
      {Cities.map((city) => (
        <button
          className="text-white text-lg font-medium divider transisition ease-out hover:scale-125"
          key={city.id}
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButton;

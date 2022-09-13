import React from "react";
import { iconUrlFromCode } from "../services/WeatherServices";

function Forecast({ title, items }) {
  return (
    <div>
      <div className="flex items-center justify-start mt-6 py-4">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2" />
      <div className="flex flex-row items-center justify-between">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-white"
          >
            <p className="font-light text-sm my-4">{item.title}</p>
            <img
              src={iconUrlFromCode(item.icon)}
              className="w-12 my-1"
              alt=""
            />
            <p className="font-medium">{`${item.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;

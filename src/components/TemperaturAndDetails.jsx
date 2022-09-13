import React from "react";
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
import {
  formatToLocalTime,
  iconUrlFromCode,
} from "../services/WeatherServices";

function TemperaturAndDetails({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) {
  return (
    <div>
      <div className="flex justify-center py-6 text-xl text-cyan-300">
        <p className="text-center">{details}</p>
      </div>

      <div className="flex flex-row items-center justify-between">
        <img src={iconUrlFromCode(icon)} alt="" className="w-20" />
        <p className="text-5xl text-white">{`${temp.toFixed()}°`}</p>

        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-white text-sm items-center justify-center">
            <UilTemperature /> Real fell:
            <span className="font-medium ml-1">
              {`${feels_like.toFixed()}`}°
            </span>
          </div>
          <div className="flex font-light text-white text-sm items-center justify-center">
            <UilTear /> Humindity :
            <span className="font-medium ml-1">{`${humidity.toFixed()}`}%</span>
          </div>
          <div className="flex font-light text-white text-sm items-center justify-center">
            <UilWind /> Wind:
            <span className="font-medium ml-1">
              {`${speed.toFixed()}`} km/h
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-10">
        <UilSun />
        <p className="font-light">
          Rise:{" "}
          <span className="font-medium ml-1">
            {formatToLocalTime(sunrise, timezone, "hh:mm a")}{" "}
          </span>
        </p>
        <p className="font-light">|</p>
        <UilSunset />
        <p className="font-light">
          Set :{" "}
          <span className="font-medium ml-1">
            {formatToLocalTime(sunset, timezone, "hh:mm a")}
          </span>
        </p>
        <p className="font-light">|</p>
        <UilArrowDown />
        <p className="font-light">
          High: <span className="font-medium ">{temp_max.toFixed()}°</span>
        </p>
        <p className="font-light">|</p>
        <UilArrowUp />
        <p className="font-light">
          Low: <span className="font-medium">{temp_min.toFixed()}°</span>
        </p>
      </div>
    </div>
  );
}

export default TemperaturAndDetails;

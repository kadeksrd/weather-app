import React from "react";

function TimesAndLocation({ weather: { dt, timezone, name, country } }) {
  return (
    <div>
      <div className="flex item-center justify-center my-6">
        <p className="text-white text-3xl font-medium">{`${name}, ${country}`}</p>
      </div>
    </div>
  );
}

export default TimesAndLocation;

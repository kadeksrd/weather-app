import "./App.css";
import TopButton from "./components/TopButton";
import Inputs from "./components/Inputs";
import TimesAndLocation from "./components/TimesAndLocation";
import TemperaturAndDetails from "./components/TemperaturAndDetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/WeatherServices";
import { useEffect, useState } from "react";

function App() {
  const [query, setQuery] = useState({ q: "bekasi " });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";

    const threshold = units === "metric" ? 28 : 70;

    if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";

    return "from-yellow-700 to-orange-700";
  };

  return (
    <div
      className={`App mx-auto my-4 max-w-screen-lg
     py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 
      ${formatBackground()}h-fit`}
    >
      <TopButton setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

      {weather && (
        <div>
          <TimesAndLocation weather={weather} />
          <TemperaturAndDetails weather={weather} />

          <Forecast title="hourly forecast" items={weather.hourly} />
          <Forecast title="daily forecast" items={weather.daily} />
        </div>
      )}
    </div>
  );
}

export default App;

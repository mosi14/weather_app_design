import { useEffect, useState } from "react";
import TopButtons from "./components/TopButtons";
import Input from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TempAndDetails from "./components/TempAndDetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/weatherServices";

function App() {
  const [query, setQuery] = useState({ q: "turin" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    const data = await getFormattedWeatherData({ ...query, units }).then(
      (data) => {
        setWeather(data);
      }
    );
    console.log(data);
  };

  useEffect(() => {
    getWeather();
  }, [query, units]);

  return (
    <div className="mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-500 from-cyan-600 to-blue-700">
      <TopButtons setQuery={setQuery} />
      <Input />

      {weather && (
        <>
          <TimeAndLocation weather={weather} />
          <TempAndDetails weather={weather} />
          <Forecast title="3 hour step forecast" data={weather.hourly} />
          <Forecast title="daily forecast" data={weather.daily} />
        </>
      )}
    </div>
  );
}

export default App;

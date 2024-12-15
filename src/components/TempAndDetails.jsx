import { FaThermometerEmpty } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

export default function TempAndDetails({
  weather: {
    datails,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
  },
  units,
}) {
  const verticalDetails = [
    {
      id: 1,
      Icon: FaThermometerEmpty,
      title: "Real Feel",
      value: `${feels_like.toFixed()}°`,
    },
    {
      id: 2,
      Icon: BiSolidDropletHalf,
      title: "Humidity",
      value: `${humidity.toFixed()}%`,
    },
    {
      id: 3,
      Icon: FiWind,
      title: "Wind",
      value: `${speed.toFixed()} ${units === "metric" ? "km/h" : "m/s"}`,
    },
  ];

  const horizontalDetails = [
    { id: 1, Icon: GiSunrise, title: "Sunrise", value: sunrise },
    { id: 2, Icon: GiSunset, title: "Sunset", value: sunset },
    {
      id: 3,
      Icon: MdKeyboardArrowUp,
      title: "High",
      value: `${temp_max.toFixed()}°`,
    },
    {
      id: 4,
      Icon: MdKeyboardArrowDown,
      title: "Low",
      value: `${temp_min.toFixed()}°`,
    },
  ];

  return (
    <div>
      <div>
        <div className="flex items-center justify-center py-6 text-xl  md:text-lg lg:text-xl text-cyan-50">
          <p>{datails}</p>
        </div>
        <div className="flex flex-row justify-between items-center py-3">
          <img src={icon} alt="weather icon" className="w-20" />
          <p className="text-5xl">{temp.toFixed()}° </p>
          <div className="flex flex-col space-y-3 items-start">
            {verticalDetails.map(({ id, title, Icon, value }) => (
              <div
                key={`vertical_${id}`}
                className="flex font-light text-sm md:text-xs lg:text-sm justify-center items-start"
              >
                <Icon size={18} className="mr-1" />
                {title}: <span className="font-medium ml-1">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-2 sm:space-x-5 md:space-x-10 text-xs md:text-xs lg:text-sm py-3 ">
        {horizontalDetails.map(({ id, title, Icon, value }) => (
          <div key={`horizontal_${id}`} className="flex flex-row items-center">
            <Icon size={30} />
            <p className="font-light ml-1">
              {title}: <span className="font-medium ml-1">{value}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

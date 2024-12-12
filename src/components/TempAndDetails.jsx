import { FaThermometerEmpty } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

export default function TempAndDetails() {
  const verticalDetails = [
    { id: 1, Icon: FaThermometerEmpty, title: "Real Feel", value: "22°" },
    { id: 2, Icon: BiSolidDropletHalf, title: "Humidity", value: "265%" },
    { id: 3, Icon: FiWind, title: "Wind", value: "20 km/h" },
  ];

  const horizontalDetails = [
    { id: 1, Icon: GiSunrise, title: "Sunrise", value: "12:33 AM" },
    { id: 2, Icon: GiSunset, title: "Sunset", value: "6:12 pm" },
    { id: 3, Icon: MdKeyboardArrowUp, title: "High", value: "37°" },
    { id: 4, Icon: MdKeyboardArrowDown, title: "Low", value: "17°" },
  ];

  return (
    <div className="">
      <div>
        <div className="flex items-center justify-center py-6 text-xl text-cyan-50">
          Rain
        </div>
        <div className="flex flex-row justify-between items-center py-3">
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            alt="weather icon"
            className="w-20"
          />
          <p className="text-5xl">34°</p>
          <div className="flex flex-col space-y-3 items-start">
            {verticalDetails.map(({ id, title, Icon, value }) => (
              <div
                key={`vertical_${id}`}
                className="flex font-light text-sm justify-center items-start"
              >
                <Icon size={18} className="mr-1" />
                {title}: <span className="font-medium ml-1">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-10 text-sm py-3">
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

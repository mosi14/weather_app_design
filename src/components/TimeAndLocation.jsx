export default function TimeAndLocation({
  weather: { formattedLocalTime, name, country },
}) {
  return (
    <div>
      <div className="flex flex-row justify-center my-6">
        <p className="text-xl  md:text-lg lg:text-xl font-extralight">
          {formattedLocalTime}
        </p>
      </div>
      <div className="flex flex-row justify-center my-3">
        <p className="text-xl md:text-lg lg:text-xl font-extralight">
          {` ${name}, ${country}`}
        </p>
      </div>
    </div>
  );
}

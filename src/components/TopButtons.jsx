export default function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      name: "London",
    },
    {
      id: 2,
      name: "Sydney",
    },
    {
      id: 3,
      name: "Tokyo",
    },
    {
      id: 4,
      name: "Paris",
    },
    {
      id: 5,
      name: "Toronto",
    },
  ];
  return (
    <div className="flex justify-around items-center my-6 flex-wrap">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-sm md:text-md lg:text-lg font-medium hover:bg-gray-700/20 px-2 md:px-3 lg:px-4 py-1 md:py-2 rounded-md transition ease-in m-1"
          onClick={() => setQuery({ q: city.name })}
        >
          {city.name}
        </button>
      ))}
    </div>
  );
}

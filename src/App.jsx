import TopButtons from "./components/TopButtons";
import Input  from "./components/Inputs";

function App() {
  return (
    <div
      className="mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-500 from-cyan-600 to-blue-700"
    
    >
      <TopButtons/>
      <Input/>
    </div>
  );
}

export default App;

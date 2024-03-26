import { useState } from "react"
import Search from "./assets/icons/search.svg";
import { useStateContext } from "./Context/myContext";
import BackgroundLayout from "./components/BackgroundLayout";
import WeatherCard from "./components/WeatherCard";

export default function App() {

  const [input, setInput] = useState("");

  const { weather } = useStateContext();

  console.log(weather);

  return (
    <div className="w-full h-screen text-white px8">
      <nav className="flex items-center justify-between p-3">
        <h1 className="text-3xl font-bold tracking-wide">Weather App</h1>
        <div className="bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2">
          <img 
          src={Search} alt="search"
          className="w-[1.5rem] h-[1.5rem]"
           />
          <input type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
          className=" focus:outline-none w-full text-[#212121] text-lg" />
        </div>        
      </nav>
      <BackgroundLayout></BackgroundLayout>
      <main className="w-full flex flex-wrap gap-8 py-4 px-[10%] items-center justify-center">
        <WeatherCard />
      </main>
    </div>
  )
}
import { useState } from "react"
import Search from "./assets/icons/search.svg";
import { useStateContext } from "./Context/myContext";
import BackgroundLayout from "./components/BackgroundLayout";
import WeatherCard from "./components/WeatherCard";
import MiniCard from "./components/MiniCard";

export default function App() {

  const [input, setInput] = useState('');

  const {  weather, location, values, place, setPlace } = useStateContext();

  console.log(place);
  const submitCity = () => {
    setPlace(input)
    setInput('');
  }

  return (
    <div className="w-full h-screen text-white px8">
      <nav className="flex items-center justify-between p-3">
        <h1 className="text-3xl font-bold tracking-wide">Weather App</h1>
        <div className="bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2">
          
          <input  onChange={(e) => setInput(e.target.value)}
          
          className=" focus:outline-none w-full text-[#212121] text-lg" 
            placeholder="Search City"
          />
          <img 
          onClick={() => submitCity()}
          
          src={Search} alt="search"
          className="w-[1.5rem] h-[1.5rem]"
           />
        </div>        
      </nav>
      <BackgroundLayout></BackgroundLayout>
      <main className="w-full flex flex-wrap gap-8 py-4 px-[10%] items-center justify-center">
        <WeatherCard
          place={location}
          windspeed={weather.wspd}
          humidity={weather.humidity}
          temperature={weather.temp}
          heatIndex={weather.heatindex}
          iconString={weather.conditions}
          conditions={weather.conditions}
         />
        <div className='flex justify-center gap-8 flex-wrap w-[60%]'>
          {
            values?.slice(1, 7).map(curr => {
              return (
                <MiniCard
                  key={curr.datetime}
                  time={curr.datetime}
                  temp={curr.temp}
                  iconString={curr.conditions}
                />
              )
            })
          }
        </div>
      </main>
    </div>
  )
}
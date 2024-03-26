import React, { useEffect, useState } from "react";
import { useDate } from "../Utils/useDate";
import Sun from "../assets/icons/sun.png";
import Cloud from "../assets/icons/cloud.png";
import Fog from "../assets/icons/fog.png";
import Rain from "../assets/icons/rain.png";
import Snow from "../assets/icons/snow.png";
import Storm from "../assets/icons/storm.png";
import Wind from "../assets/icons/windy.png";
import { useStateContext } from "../Context/myContext";

import "../index.css";

const WeatherCard = () => {
  const { weather, place } = useStateContext();

  const windspeed = weather.wspd;
  const humidity = weather.humidity;
  const temperature = weather.temp;
  const heatIndex = weather.heatindex;
  const iconString = weather.conditions;
  const conditions = weather.conditions;

  const [icon, setIcon] = useState(Sun);
  const { time } = useDate();

  useEffect(() => {
    if (iconString) {
      if (iconString.toLowerCase().includes("cloud")) {
        setIcon(Cloud)
      } else if (iconString.toLowerCase().includes("rain")) {
        setIcon(Rain)
      } else if (iconString.toLowerCase().includes("sun")) {
        setIcon(Sun)
      } else if (iconString.toLowerCase().includes("clear")) {
        setIcon(Clear)
      } else if (iconString.toLowerCase().includes("thunder")) {
        setIcon(Storm)
      } else if (iconString.toLowerCase().includes("fog")) {
        setIcon(Fog)
      } else if (iconString.toLowerCase().includes("wind")) {
        setIcon(Wind)
      } else if (iconString.toLowerCase().includes("snow")) {
        setIcon(Snow)
      }
    }
  }, [iconString]);

  return (
    <div className=" w-[22rem] min-w-[22rem] h-[30rem] glassCard p-4">
      <div className="flex items-center justify-center w-full gap-4 mt-12 mb4">
        <img src={icon} alt="weather-icon" />
        <p className="flex items-center justify-center text-5xl font-bold">
          {temperature} &deg;C
        </p>
      </div>
      <div className="text-xl font-bold text-center">{place}</div>
      <div className="flex items-center justify-center w-full mt4">
        <p className="flex-1 text-center p2">
          {new Date().toLocaleTimeString()}
        </p>
        <p className="flex-1 p-2 text-center">{time}</p>
      </div>
      <div className="flex items-center justify-center w-full gap-4 mt4">
        <p className="flex-1 font-bold text-center bg-blue-600 rounded-lg shadow p2">
          Wind Speed <p className="font-normal">{windspeed} km/h</p>
        </p>
        <p className="flex-1 font-bold text-center bg-green-600 rounded-lg p2">
          Humidity <p className="font-normal">{humidity} gm/m&#179;</p>
        </p>
      </div>
      <div className="flex items-center justify-center w-full p-3 mt-4">
        <p className="text-lg font-semibold">Heat Index</p>
        <p className="text-lg">{heatIndex ? heatIndex : 'N/A'}</p>
      </div>
      <hr className="bg-slate-600" />
      <div className="flex items-center justify-center w-full p-4 text-3xl font-semibold">{conditions}</div>
    </div>
  );
};

export default WeatherCard;

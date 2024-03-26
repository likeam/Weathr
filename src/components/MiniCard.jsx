import React, { useEffect, useState } from 'react'
import Sun from "../assets/icons/sun.png";
import Cloud from "../assets/icons/cloud.png";
import Fog from "../assets/icons/fog.png";
import Rain from "../assets/icons/rain.png";
import Snow from "../assets/icons/snow.png";
import Storm from "../assets/icons/storm.png";
import Wind from "../assets/icons/windy.png";
import Clear from "../assets/icons/sun.png";

const MiniCard = ({iconString, time,  temp}) => {

  const [icon, setIcon] = useState();

  useEffect(() => {
    if(iconString) {
      if(iconString.toLowerCase().includes("cloud")) {
        setIcon(Cloud)
      } else if(iconString.toLowerCase().includes("rain")) {
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
    <div className='glassCard w-[10rem] h-[10rem] p-4 flex flex-col'>
      <p className="text-center">
        {new Date(time).toLocaleTimeString('en', {weekday: 'long'}).split(" ")[0]}
      </p>
      <hr />
      <div className="flex items-center justify-center flex-1 w-full">
        <img src={icon} alt="forcost not Available" className="w-[4rem].h-[4rem]" />
      </div>
      <p className="font-bold text-center ">{temp}&deg;C</p>

    </div>
  )
}

export default MiniCard

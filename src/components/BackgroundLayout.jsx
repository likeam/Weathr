import React, { useEffect, useState } from 'react'
import { useStateContext } from '../Context/myContext'
import Clear from "../assets/images/Clear.jpg"
import Cloudy from "../assets/images/Cloudy.jpg"
import Fog from "../assets/images/fog.png"
import Rainy from "../assets/images/Rainy.jpg"
import Snow from "../assets/images/snow.jpg"
import Stormy from "../assets/images/Stormy.jpg"
import Sunny from "../assets/images/Sunny.jpg"

const BackgroundLayout = () => {

  const { weather } = useStateContext();

  const [image, setImage] = useState(Clear);

  console.log(weather);

  useEffect(() => {

    if(weather.conditions){
      let ImageString = weather.conditions
      if(ImageString.toLowerCase().includes('clear')){
        setImage(Clear)
      }else if(ImageString.toLowerCase().includes('cloud')){
        setImage(Cloudy)
      }else if(ImageString.toLowerCase().includes('rain')  || ImageString.toLowerCase().includes('shower') ){
        setImage(Rainy)
      }else if(ImageString.toLowerCase().includes('snow')){
        setImage(Snow)
      }else if(ImageString.toLowerCase().includes('fog')){
        setImage(Fog)
      }else if(ImageString.toLowerCase().includes('thunder')  || ImageString.toLowerCase().includes('storm') ){
        setImage(Stormy)
    }
  }
  }, [weather])

  return (
    <img src={image} alt="weather_image" className='h-screen w-full fixed left-0 top-0 -z-[10]' />
  )
}

export default BackgroundLayout

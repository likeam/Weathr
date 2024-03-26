import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios'


const StateContext = createContext();

export const StateContextProvider = ({children}) => {

    const [weather, setWeather] = useState({});
    const [values, setValues] = useState([]);
    const [place, setPlace] = useState('Gujranwala'); 
    const [location, setLocation] = useState("");

    const fetchWeather = async () => {
        

        const options = {
          method: 'GET',
          url: 'https://visual-crossing-weather.p.rapidapi.com/forecast',
          params: {
            aggregateHours: '24',
            location: place,
            contentType: 'json',
            unitGroup: 'metric',
            shortColumnNames: '0'
          },
          headers: {
            'X-RapidAPI-Key': '5ff617a7f4msha2a652d5414c58bp1fa926jsn672f503fb2f3',
            'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
          }
        };
        
        try {
            const response = await axios.request(options);
            
           
            const thisData = Object.values(response.data.locations)[0]
            setLocation(thisData.address)
            setValues(thisData.values)
            setWeather(thisData.values[0])
        } catch (error) {
            console.error(error);
            alert('This Place dones not exist')
        }
    }

    useEffect(() => {
        fetchWeather()
    }, [ place])

    useEffect(() => {
        console.log(values)
    }, [values])

    return(
        <StateContext.Provider value={{
            weather,
            setPlace,
            values,
            location, 
            place
        }}>
            {children}
        </StateContext.Provider>
    )

}

export const useStateContext = () => useContext(StateContext);
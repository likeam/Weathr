import { createContext, useContext, useEffect, useState } from "react";


const StateContext = createContext();

export const StateContextProvider = ({children}) => {

    const [weather, setWeather] = useState({});
    const [values, setValues] = useState([]);
    const [place, setPlace] = useState("Gujranwala"); 
    const [location, setLocation] = useState("");

    const fetchWeather = async () => {
        const axios = require('axios');

        const options = {
          method: 'GET',
          url: 'https://visual-crossing-weather.p.rapidapi.com/forecast',
          params: {
            aggregateHours: '24',
            location: 'Washington,DC,USA',
            contentType: 'csv',
            unitGroup: 'us',
            shortColumnNames: '0'
          },
          headers: {
            'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
            'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
          }
        };
        
        try {
            const response = await axios.request(options);
            console.log(response.data);
            const data = Object.values(response.data.locations)[0]
            setLocation(data.address)
            setValue(data.values)
            setWeather(data.values[0])
        } catch (error) {
            console.error(error);
            alert('This Place dones not exist')
        }
    }

    useEffect(() => {
        //fetchWeather()
    }, [place])

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
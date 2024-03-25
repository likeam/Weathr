import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

export default useDate = () => {
    const locale = 'en';
    const [today, setDate] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() =>{
            setDate(new Date())
        }, 60*1000 )

        return() => {
            clearInterval(timer)
        }
    }, [])

    const day = today.toLocalDateString(locale, {weekday: 'long'})
    const date = `${day}, ${today.getDate()}, ${today.toLocalDateString(locale, {month: 'long'})}\n\n`
    const time = today.toLocalDateString(locale, {hours: 'numeric', hours12: true, minute: 'numeric'})
  return (
    date, time
  )
}



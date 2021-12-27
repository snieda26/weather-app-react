import React, { useCallback, useState, useEffect } from 'react';
import axios from 'axios'

import Header from '../Header';
import Form from '../Form';
import Forecast from '../Forecast';

import styles from './Page.module.css'

const Page = () => {

    let data = JSON.parse(localStorage.getItem('forecastData')) || []

    useEffect(() => {
        console.log('render Page')
        data = localStorage.getItem('forecastData')
    })

    const [activeForecast, setActiveForecast] = useState(0)



    const submitSearch2 = useCallback((city) => {

        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=c8fd7bb77320504dd8fe36d3eb67f9df`)
            .then(({ data }) => {
                // temp − 273,15
                // localStorage.setItem()

                const oldDataForecast = JSON.parse(localStorage.getItem('forecastData')) || []
                const resData = {
                    name: data.name,
                    temp: +(data.main.feels_like - 273.15).toFixed(2)
                }

                localStorage.setItem('forecastData', JSON.stringify([...oldDataForecast, resData]))
                setActiveForecast(resData)
            })
    }, [])

    return (
        <>
            <Header />
            <div className={styles.box}>
                <Form submitSearch={submitSearch2} />
            </div>


            <div className={styles.forecast_container}>
                {
                    data.map(obj => <Forecast isActive={obj.name === activeForecast.name ? true : false}
                        name={obj.name}
                        temp={obj.temp} />)
                }
            </div>

        </>
    );
};



export default Page;

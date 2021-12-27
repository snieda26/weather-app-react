import React from 'react';

import snow from '../../images/weezle_night_and_snow.png'
import sun from '../../images/weezle_sun.png'


import styles from './Forecast.module.css';

const Forecast = ({ name, temp, isActive }) => (
    <div className={`${styles.forecast} ${isActive ? 'yellowBorder' : ''}`}>
        <div>
            <p className={styles.city_name}>{name}</p>
            <p className={styles.city_temp}>{temp}</p>
        </div>
        <img src={temp > 0 ? sun : snow} className={styles.city_temp} alt="temp" />
    </div>
);

export default Forecast;

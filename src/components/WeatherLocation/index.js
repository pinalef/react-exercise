import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import {CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY} from '../../constant/weathers';

const data = {
    temperature: 12,
    weatherState: RAIN,
    humidity: 59,
    wind: '10 m/s',
}

const WeatherLocation = () => (
    <div>
        <Location city = {'Santiago'}/>
        <WeatherData data = {data}/>
    </div>
)

export default WeatherLocation;
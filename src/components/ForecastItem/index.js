import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData';

const ForecastItem = ( {weekDay, hour, data} ) => (
    <div>
        <div> {weekDay} </div>
        <WeatherData data = {data}> </WeatherData>
    </div>
)

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        humidity: PropTypes.isRequired,
        weatherState: PropTypes.string.isRequired,
        wind: PropTypes.number.isRequired,
    })
}

export default ForecastItem;
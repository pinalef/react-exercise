import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';

const LocationList = ({cities, onSelectedLocation}) => {
    const handlerWeatherLocationClick = (city) => {
        console.log('handleWeatherLocationClick');
        onSelectedLocation(city);
    }
    const strToComponent = (cities) => (
        cities.map(city => (
            <WeatherLocation 
                key = {city} 
                city = {city}
                onWeatherLocationClick = {
                    () => handlerWeatherLocationClick(city)
                }
            />
        ))
    )
    return (
        <div>
            {strToComponent(cities)}
        </div>
    )
}

LocationList.propType = {
    cities: PropTypes.array.isRequired,
}

export default LocationList;
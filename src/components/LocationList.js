import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';

const LocationList = ({cities, onSelectedLocation}) => {
    const handlerWeatherLocationList = (city) => {
        console.log('handleWeatherLocationClick');
        onSelectedLocation(city);
    }
    const strToComponent = (cities) => (
        cities.map(city => (
            <WeatherLocation 
                key = {city} 
                city = {city}
                onWeatherLocationClick = {
                    () => handlerWeatherLocationList(city)
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
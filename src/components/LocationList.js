import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';

const strToComponent = (cities) => (
    cities.map(city => (
        <WeatherLocation city = {city} />
    ))
)

const LocationList = ({cities}) => (
    <div>
        <WeatherLocation city = {'Santiago, SCL'} />
        <WeatherLocation city = {'Bogotá, COL'} />
        <WeatherLocation city = {'Rio de Janeiro, BR'} />
        <WeatherLocation city = {'Buenos Aires, AR'}/>
    </div>
)

LocationList.propType = {
    cities: PropTypes.array.isRequired,
}

export default LocationList;
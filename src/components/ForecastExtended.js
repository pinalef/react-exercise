import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';

 const days = [
     'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'
 ];

 const data = {
    temperature: 10,
    humidity: 10,
    weatherState: 'normal',
    wind: 'normal',
}

class ForecastExtended extends Component {
    constructor() {
        super();
        this.state = {
            forecastData: null
        }
    }
    renderForecastItemDays() {
        return 'render items';
        /*return days.map(day => (<ForecastItem key={day} weekDay={day} hour = {10} data = {data}> </ForecastItem>))
            // <ForecastItem weekDay={'Miércoles'}> </ForecastItem>*/
    }
    renderProgress = () => {
        return (<h3>Cargando pronóstico extendido... </h3>)
    }
    render() {
        const { city } = this.props;
        const { forecastData } = this.state;
        return (
            <div>
                <h2 className='forecastTitle'>Pronóstico entendido para {city} </h2>
                {forecastData !== null ? this.renderForecastItemDays() :this.renderProgress()}
            </div>
        )
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;
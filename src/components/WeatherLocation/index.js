import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import {CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY} from '../../constant/weathers';

const data1 = {
    temperature: 12,
    weatherState: RAIN,
    humidity: 59,
    wind: '10 m/s',
}

const data2 = {
    temperature: -1,
    weatherState: SNOW,
    humidity: 89,
    wind: '70 m/s',
}

/*
const WeatherLocation = () => (
    <div>
        <Location city = {'Santiago'}/>
        <WeatherData data = {data}/>
    </div>
)*/

class WeatherLocation extends Component {
    constructor () {
        // invoca métodos existenes de un padre (data1, data2)
        super();
        // toma el estado del componente en ese punto de tiempo
        // set.state los puede setear y entregarle datos nuevos
        this.state = {
            city: 'Santiago',
            data: data1
        }
    }
    handleUpdateClick = () => {
        this.setState({
            city: 'Santiago',
            data: data2
        })
        console.log('Actualizado')
    }
    render = () => (

        <div>
            <Location city = {this.state.city}/>
            <WeatherData data = {this.state.data}/>
            <button onClick = {this.handleUpdateClick}>Actualizar</button>
        </div> 
    )
}

export default WeatherLocation;
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LocationList from './components/LocationList';
import './App.css';

const cities = [
  'Buenos Aires, AR',
  'Bogotá, COL',
  'Santiago, SCL',
  'Ciudad de México, MX',
  'Madrid, ES',
  'Rio de Janeiro, BR'
];

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <LocationList cities = { cities }/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Result from './Result';
import './wheatherapp.scss';

const WeatherApp = () => {
  const key = ""; // Your API key here
  const [search, setSearch] = useState('');
  const [data, setData] = useState();

  useEffect(() => {
    async function getWeather() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getWeather();
  }, [search]);

  return (
    <div className="container">
      <div className="container_header">
        <h1 className="header">Weather Forecast by City</h1>
      </div>
      <div className="input-group">
        <label className="input-group__label">Enter the city name:</label>
        <input
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by the City"
          type="text"
          id="myInput"
          className="input-group__input"
        />
      </div>
      {typeof data !== 'undefined' && <Result data={data} />}
    </div>
  );
};

export default WeatherApp;

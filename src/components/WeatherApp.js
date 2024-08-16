import React, { useState } from 'react';
import './WeatherApp.css';

function WeatherApp() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const getWeather = async (e) => {
    e.preventDefault();
    const apiKey = 'bd5e378503939ddaee76f12ad7a97608';
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      const data = await response.json();
      if (data.cod === 200) {
        setWeatherData(data);
        setError('');
      } else {
        setWeatherData(null);
        setError(data.message);
      }
    } catch (err) {
      setWeatherData(null);
      setError(err.message);
    }
  };

  return (
    <><div className="container">
      <h2>Weather Forecast</h2>
      <form onSubmit={getWeather}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name" />
        <button type="submit">Get Weather</button>
      </form>
      {weatherData && (
        <div className="weather-info">
          <p><strong>City:</strong> {weatherData.name}, {weatherData.sys.country}</p>
          <p><strong>Temperature:</strong> {weatherData.main.temp} °C</p>
          <p><strong>Weather:</strong> {weatherData.weather[0].description}</p>
        </div>
      )}
      {error && (
        <div className="error-message">
          Error: {error}
        </div>
      )}
    </div><br></br><br></br><br></br></>
  );
}

export default WeatherApp;


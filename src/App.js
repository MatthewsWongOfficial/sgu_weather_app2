import logo from './logo.svg';
import './App.css';
import icon128 from './assets/images/icon128.png';

function App() {
  return (
      <div className="container">
        <h1>Weather App</h1>
          <img src={icon128} alt="icon128" />
        <table className="centerContainer">
          <tr>
            <td>
              <label id="cityLabel" htmlFor="cityNameTextField">Enter a city:</label>
            </td>
          </tr>
          <tr>
            <td>
              <input id="cityNameTextField" type="text" name="cityName" />
              <input id="submitButton" type="button" value="Submit" onClick="submitAction()" />
            </td>
          </tr>
        </table>
        <div className="spacer"></div>
        <table width="60%" className="centerContainer" cellPadding="5px">
          <tr>
            <th>Temperature</th>
            <td id="temperatureField">0</td>
          </tr>
          <tr>
            <th>Feels Like</th>
            <td id="feelsLikeField">0</td>
          </tr>
          <tr>
            <th>Humidity</th>
            <td id="humidityField">0</td>
          </tr>
          <tr>
            <th>Atmospheric Pressure</th>
            <td id="pressureField">0</td>
          </tr>
        </table>
      </div>

  );
}

export default App;

import { useEffect, useState } from 'react';
import './index.scss';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const [worldstats, setWorldstats] = useState([]);

  const optionsStatistics = {
    method: 'GET',
    url: 'https://covid-193.p.rapidapi.com/statistics',
    headers: {
      'X-RapidAPI-Key': '2c38faa98fmsh019b58309f5e926p1f7f64jsn9484a7416d26',
      'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
    },
  };

  const getDataCovidStats = () => {
    axios.request(optionsStatistics).then(function (response) {
      setWorldstats(response.data.response);
    });
  };

  useEffect(() => {
    getDataCovidStats();
  }, []);

  const totalRecovered = worldstats.reduce(
    (prev, curr) => (prev += curr?.cases?.recovered || 0),
    0
  );

  const totalDeaths = worldstats.reduce(
    (prev, curr) => (prev += curr?.deaths?.total || 0),
    0
  );

  const totalActive = worldstats.reduce(
    (prev, curr) => (prev += curr?.cases?.active || 0),
    0
  );

  return (
    <div>
      <div className="world-map">
        <img
          className="map"
          src="https://www.bloomberg.com/graphics/2020-coronavirus-cases-world-map/img/2020-coronavirus-cases-world-map-facebook.png?t=202011091543"
          alt="2020-coronavirus-cases-world-map-facebook.png"
          border="0"
        />
      </div>
      <h1 className="worldStats">World stats</h1>
      <div className="card_statistics">
        <div>
          Recovered:{' '}
          <p style={{ color: 'green', fontWeight: 'bold' }}>{totalRecovered}</p>
        </div>
        <div>
          Deaths:{' '}
          <p style={{ color: 'red', fontWeight: 'bold' }}>{totalDeaths}</p>
        </div>
        <div>
          Active Cases:{' '}
          <p style={{ color: 'blue', fontWeight: 'bold' }}>{totalActive}</p>
        </div>
        <div>
          <NavLink to={'/countries-stats'}>Country Stats</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;

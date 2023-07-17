import React, { useEffect, useState } from 'react';
import CovidStatsCard from './CovidStatsCard';
import axios from 'axios';

const CovidStats = () => {
  const [covidStats, setCovidStats] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const perPage = 12;

  const handleChange = (event, value) => {
    setActivePage(value);
    window.scrollTo(0, 0);
  };

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
      setCovidStats(response.data.response);
      console.log(response.data.response);
    });
  };

  useEffect(() => {
    getDataCovidStats();
  }, []);

  const totalPages = Math.ceil(covidStats.length / perPage);
  const visitedPerPage = (activePage - 1) * perPage;
  const paginatedData = covidStats.slice(
    visitedPerPage,
    visitedPerPage + perPage
  );

  return (
    <div>
      {paginatedData.map(el => (
        <CovidStatsCard
          key={el.country}
          continent={el.continent}
          countryName={el.country}
          population={el.population || 0}
          newCases={el.cases.new || 0}
          deaths={el.deaths.total || 0}
          countryImg={'BE'}
        />
      ))}
      <div className="buttons-container">
        <button
          disabled={activePage === 1}
          onClick={() => handleChange(null, activePage - 1)}
        >
          {'<'}
        </button>
        <span>{activePage}</span>
        <button
          disabled={activePage === totalPages}
          onClick={() => handleChange(null, activePage + 1)}
        >
          {'>'}
        </button>
      </div>
    </div>
  );
};

export default CovidStats;

import { useState, useEffect } from 'react';
import axios from 'axios';
import CountryList from './CountryList';
import StateCard from './CountryStatsCard';

const CountryStats = () => {
  const [selectedCountry, setSelectedCountry] = useState({
    name: 'Serbia',
    code: 'RS',
  });
  const [countryStats, setCountryStats] = useState(null);

  const handleCountrySelect = (countryName, countryCode) => {
    setSelectedCountry({ name: countryName, code: countryCode });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://covid-193.p.rapidapi.com/history/${selectedCountry.code}`
        );
        setCountryStats(response.data);
      } catch (error) {
        console.error('Error fetching country statistics:', error);
      }
    };

    fetchData();
  }, [selectedCountry.code]);

  return (
    <div>
      <CountryList countryNameFunc={handleCountrySelect} />
      {countryStats ? (
        <StateCard
          countryName={selectedCountry.name}
          countryImg={selectedCountry.code}
          new_cases={countryStats.new_cases}
          new_death={countryStats.new_death}
          new_recovered={countryStats.new_recovered}
          total_active={countryStats.total_active}
        />
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default CountryStats;

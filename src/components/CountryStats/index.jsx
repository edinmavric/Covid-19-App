import React from 'react';
import StateCard from './CountryStatsCard';
import MaterialUIPickers from './DatePicker';
import CountrySelect from './CountryList';

const CountryStats = () => {
  return (
    <>
      <div className="top-inputs">
        <CountrySelect />
        <MaterialUIPickers />
      </div>
      <div className="CountryStates">
        <div className="mainCountryStats">
          <div className="stateCard">
            <StateCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryStats;

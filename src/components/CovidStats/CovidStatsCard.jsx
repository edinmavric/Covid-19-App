import './index.scss';

const CovidStatsCard = ({
  continent,
  countryName,
  population,
  newCases,
  deaths,
  countryImg,
}) => {
  return (
    <div className="CovidStats-Card">
      <div className="continent">
        Continent: <span>{continent}</span>
      </div>
      <div className="country">
        Country: <span>{countryName}</span>
      </div>
      <div className="CovidStats-Card__rates">
        <div className='population'>
          Population: <span>{population}</span>
        </div>
        <div>
          New Cases: <span>{newCases}</span>
        </div>
        <div>
          Deaths: <span>{deaths}</span>
        </div>
        <div
          style={{
            backgroundImage: `url(
            https://flagsapi.com/BE/flat/64.png
              )`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default CovidStatsCard;

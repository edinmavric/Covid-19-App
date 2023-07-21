/* eslint-disable react/prop-types */
import "./index.scss";
import Skeleton from "@mui/material/Skeleton";

export default function StateCard({
  countryName,
  countryImg,
  new_cases,
  new_death,
  new_recovered,    
  total_active,
}) {
    console.log("countryName:", countryName);
  console.log("countryImg:", countryImg);
  console.log("new_cases:", new_cases);
  console.log("new_death:", new_death);
  console.log("new_recovered:", new_recovered);
  console.log("total_active:", total_active);

  let flagUrl = `https://flagcdn.com/w20/${countryImg ? countryImg.toLowerCase() : ""}.png`;

  return (
    <div className="country-card">
      <div className="country-info">
        {countryImg && <img src={flagUrl} className="country-flag" alt="Country Flag" />}
        <h2 className="country-name">{countryName}</h2>
      </div>

      {new_cases && new_death && new_recovered && total_active ? (
        <div className="country-data">
          <div className="data-row">
            <h4 className="data-box">
              <span className="data-value">{new_cases?.toLocaleString()}</span>
              <span className="data-label">New Cases</span>
            </h4>
            <h4 className="data-box">
              <span className="data-value">{new_death}</span>
              <span className="data-label">New Deaths</span>
            </h4>
            <h4 className="data-box">
              <span className="data-value">{Number(new_recovered)?.toLocaleString()}</span>
              <span className="data-label">New Recovered</span>
            </h4>
          </div>
          <h4 className="data-box total-active">
            <span className="data-value">{total_active?.toLocaleString()}</span>
            <span className="data-label">Total Active</span>
          </h4>
        </div>
      ) : (
        <div className="skeleton-loader">
          <Skeleton variant="rectangular" animation="wave" width={90} height={90} />
          <Skeleton variant="rectangular" animation="wave" width={90} height={90} />
          <Skeleton variant="rectangular" animation="wave" width={90} height={90} />
          <Skeleton variant="rectangular" animation="wave" width={90} height={90} />
        </div>
      )}
    </div>
  );
}
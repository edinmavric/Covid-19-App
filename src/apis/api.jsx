import axios from 'axios';

const optionsCoutries = {
  method: 'GET',
  url: 'https://covid-193.p.rapidapi.com/countries',
  headers: {
    'X-RapidAPI-Key': '2c38faa98fmsh019b58309f5e926p1f7f64jsn9484a7416d26',
    'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
  },
};

try {
  const response = await axios.request(optionsCoutries);
  console.log(response.data);
} catch (error) {
  console.error(error);
}

///////////////////////////////////////////////////////////////////////////////
//ja mislim da bi mogao export za ove podatke ako se ne varam
 const optionsStatistics = {
  method: 'GET',
  url: 'https://covid-193.p.rapidapi.com/statistics',
  headers: {
    'X-RapidAPI-Key': '2c38faa98fmsh019b58309f5e926p1f7f64jsn9484a7416d26',
    'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
  },
};

try {
  const response = await axios.request(optionsStatistics);
  console.log(response.data);
} catch (error) {
  console.error(error);
}

///////////////////////////////////////////////////////////////////////////////

const optionsHistory = {
  method: 'GET',
  url: 'https://covid-193.p.rapidapi.com/history',
  params: {
    country: 'usa',
    day: '2020-06-02',
  },
  headers: {
    'X-RapidAPI-Key': '2c38faa98fmsh019b58309f5e926p1f7f64jsn9484a7416d26',
    'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
  },
};

try {
  const response = await axios.request(optionsHistory);
  console.log(response.data);
} catch (error) {
  console.error(error);
}

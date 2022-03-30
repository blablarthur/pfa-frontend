const jsonData = require('../../data-trimed-both-sex-final-minimum.json');

export const filterData = (filter) => {
  const dataCountryFiltered = jsonData.filter(line => filter.country1.includes(line.label));
  const dataCountryFiltered2 = jsonData.filter(line => filter.country2.includes(line.label));
  const minPeriod = Math.max(minPeriodCountries(dataCountryFiltered, dataCountryFiltered2), filter.years[0]);
  const dataCountryTimeFiltered = dataCountryFiltered.filter(line => minPeriod <= line.Period && filter.years[1] >= line.Period);
  const dataCountryTimeFiltered2 = dataCountryFiltered2.filter(line => filter.years[0] <= line.Period && filter.years[1] >= line.Period);
  return [dataCountryTimeFiltered, dataCountryTimeFiltered2];
}

export const filterDataCountry = (country1Filter, country2Filter) => {
  const dataCountryFiltered = jsonData.filter(line => country1Filter.includes(line.label));
  const dataCountryFiltered2 = jsonData.filter(line => country2Filter.includes(line.label));
  return [dataCountryFiltered, dataCountryFiltered2];
}

export const minPeriodCountries = (country1, country2) => {
  let minPeriod = 0; 
  if (country1.length !== 0 && country2.length !== 0) {
    minPeriod = Math.max(country1[0].Period, country2[0].Period);
  } else if (country1.length !== 0) {
    minPeriod = country1[0].Period;
  } else if (country2.length !== 0) {
    minPeriod = country2[0].Period;
  }
  return minPeriod;
}
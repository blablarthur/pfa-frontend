import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

const getSpecifiedDomainChartData = (filteredData, sliderValue, setPeriodValue, filterYearMax, filterYearMin) => {
  if (sliderValue > filterYearMax || sliderValue < filterYearMin) {
    setPeriodValue(filterYearMax);
    sliderValue = filterYearMax;
  }

  const country1Values = filteredData[0].filter(t => t.Period === sliderValue)[0];
  const country2Values = filteredData[1].filter(t => t.Period === sliderValue)[0];

  return [{
    nutritionalTypes: 'Animal protein',
    A: 10 * country1Values["Calories from animal protein"],
    B: 10 * country2Values["Calories from animal protein"],
    fullMark: 2000,
  },{
    nutritionalTypes: 'Fat',
    A: 2 * country1Values["Calories from fat"],
    B: 2 * country2Values["Calories from fat"],
    fullMark: 2000,
  },{
    nutritionalTypes: 'Plant protein',
    A: 7 * country1Values["Calories from plant protein"],
    B: 7 * country2Values["Calories from plant protein"],
    fullMark: 2000,
  },{
    nutritionalTypes: 'Carbohydrates',
    A: country1Values["Calories from carbohydrates"],
    B: country2Values["Calories from carbohydrates"],
    fullMark: 2000,
  }
]
}

const SpecifiedDomainChartComp = ({ filteredData, filter }) => {
    const [periodValue, setPeriodValue] = useState(2013);
    const country1 = filteredData[0][0]["label"];
    const country2 = filteredData[1][0]["label"];

    const handleOnChange = (_, value) => {
      setPeriodValue(value);
    }

    return (
      <div className='containerCenter'>
        <RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500}
          data={getSpecifiedDomainChartData(filteredData, periodValue, setPeriodValue, parseInt(filter.years[1]), parseInt(filter.years[0]))}>
          <PolarGrid />
          <PolarAngleAxis dataKey="nutritionalTypes" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar name={country1} dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Radar name={country2} dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
          <Legend />
        </RadarChart>
        <Slider
          getAriaLabel={() => 'Period range'}
          value={periodValue}
          onChange={handleOnChange}
          valueLabelDisplay="on"
          max={parseInt(filter.years[1])}
          min={parseInt(filter.years[0])}
          sx={{
            width: 200,
            mt: 5
          }}
        />
      </div>
    );
  }

export default SpecifiedDomainChartComp;

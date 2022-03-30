import React, { useState } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area
} from "recharts";
import colorPicker from '../ColorPicker';
import CustomPieChart from './CustomPieChart';
import ChartSize from '../ChartSizes';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const toPercent = (decimal) => `${(decimal * 100).toFixed(0)}%`;

export function ChartComponent({ filter, filteredData }) {
  let pieChart;
  const [areaChartSwitchChanges, setAreaChartSwitchChanges] = useState({
    yAxis: <YAxis />,
    stackOffset: "none"
  });
  if (filteredData.length !== 0) {
    pieChart = <CustomPieChart filteredData={filteredData} />
  }

  const handleSwitchOnChange = (_, value) => {
    if (value) {
      setAreaChartSwitchChanges({
        yAxis: <YAxis tickFormatter={toPercent} />,
        stackOffset: "expand"
      })
    } else {
      setAreaChartSwitchChanges({
        yAxis: <YAxis />,
        stackOffset: "none"
      })
    }
  }

  const getObesityRateProgression = (yearMin, yearMax) => {
    const minValue = filteredData.filter(t => t.Period == yearMin)[0]["Obesity Rate"];
    const maxValue = filteredData.filter(t => t.Period == yearMax)[0]["Obesity Rate"];
    return (maxValue / minValue)  * 100 - 100;
  }

  const getObesityRateAverageProgression = (yearMin, yearMax) => {
    if (yearMin !== yearMax) {
       return getObesityRateProgression(yearMin, yearMax) / (yearMax - yearMin);
    }
    else {
      return 0;
    }
}

  let obesityRateProgression;
  if (filteredData[0] !== undefined) {
    obesityRateProgression = 
    <div>
      <h3 className='countryTitle'>
        The obesity in {filteredData[0].label} grew by {getObesityRateProgression(filter.years[0], filter.years[1]).toFixed(1)}% between {filter.years[0]} and {filter.years[1]}
      </h3>
      <h3 className='countryTitle'>
        which equals to {getObesityRateAverageProgression(filter.years[0], filter.years[1]).toFixed(1)}% by year in average.
      </h3>
    </div>;
  }
  else {
    obesityRateProgression = "";
  }
  return (
    <div>
      <h1 className='countryTitle'>{filteredData[0] === undefined ? "": filteredData[0].label}</h1>
      <LineChart
        width={ChartSize.width}
        height={ChartSize.height}
        data={filteredData}
        margin={ChartSize.margin}
        className="LineChart"
        syncId="LineChartIdObesity"
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Period" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey={"Obesity Rate"} stroke={colorPicker["Obesity Rate"]} />
      </LineChart>

      {obesityRateProgression}

      <LineChart
        width={ChartSize.width}
        height={ChartSize.height}
        data={filteredData}
        margin={ChartSize.margin}
        syncId="LineChartId"
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Period" />
        <YAxis />
        <Tooltip />
        <Legend />
        {filter.nutritionalTypes.map((value) => {
          return <Line key={value} type="monotone" dataKey={value} stroke={colorPicker[value]} />
        })}
      </LineChart>
      <FormGroup>
        <FormControlLabel 
          control={
            <Switch
              onChange={handleSwitchOnChange} 
            />}
          label="% Percentage"
        />
      </FormGroup>
      <AreaChart
        width={ChartSize.width}
        height={ChartSize.height}
        data={filteredData}
        stackOffset={areaChartSwitchChanges.stackOffset}
        margin={ChartSize.margin}
        syncId="AreaChartId"
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Period" />
        {areaChartSwitchChanges.yAxis}
        <Tooltip />
        <Legend />
        {filter.nutritionalTypes.map((value) => 
          <Area key={value} type="monotone" dataKey={value} stackId="1" stroke={colorPicker[value]} fill={colorPicker[value]} />
        )}
      </AreaChart>
      {pieChart}
    </div>
  )
}
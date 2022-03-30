import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import ChartSize from '../ChartSizes';
import SpecifiedDomainChartComp from './SpecifiedDomainChartComp';

const getAreaChartCompData = (filteredData) => {
  const country1 = `Obesity in ${filteredData[0][0]["label"]}`;
  const country2 = `Obesity in ${filteredData[1][0]["label"]}`;
  const res = filteredData[0].map( (data, index) => {
    return {
      name: "Obesity",
      year: data["Period"],
      [country1]: data["Obesity Rate"],
      [country2]: filteredData[1][index]["Obesity Rate"]
    }
  })
  return res;
}

const ComparaisonChartComp = ({ filteredData, filter }) => {
  var country1 = "";
  if (filteredData[0][0] !== undefined) {
    country1 = `Obesity in ${filteredData[0][0]["label"]}`;
  }
  const country2 = `Obesity in ${filteredData[1][0]["label"]}`;
  return (
    <div>
      <h1 className='countryTitle'>Comparison</h1>
      <AreaChart
        width={ChartSize.width}
        height={ChartSize.height}
        data={getAreaChartCompData(filteredData)}
        margin={ChartSize.margin}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="year" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey={country1} stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
        <Area type="monotone" dataKey={country2} stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
      </AreaChart>
      <SpecifiedDomainChartComp filteredData={filteredData} filter={filter} />
    </div>
  );
}

export default ComparaisonChartComp;
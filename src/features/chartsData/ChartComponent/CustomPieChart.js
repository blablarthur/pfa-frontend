import React, { useState } from 'react';
import { PieChart, Pie, Sector, Cell } from 'recharts';
import Slider from '@mui/material/Slider';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux'
import colorPicker from '../ColorPicker';

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`${value} kcal`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

const getPieChartData = (filteredData, year, setPeriodValue, filterYearMax, filterYearMin) => {
  if (year > filterYearMax || year < filterYearMin) {
    setPeriodValue(filterYearMax);
    year = filterYearMax;
  }
  const fixedYearData = filteredData.filter(t => t.Period == year)[0];
  const resultProtein = [ {
    name: "Calories from animal protein",
    value: fixedYearData["Calories from animal protein"]
  },
  {
    name: "Calories from plant protein",
    value: fixedYearData["Calories from plant protein"]
  }
  ]
  return resultProtein;
}

const getPieChartFatCarboData = (filteredData, year, setPeriodValue, filterYearMax, filterYearMin) => {
  if (year > filterYearMax || year < filterYearMin) {
    setPeriodValue(filterYearMax);
    year = filterYearMax;
  }
  const fixedYearData = filteredData.filter(t => t.Period == year)[0];
  const resultFatCarbo = [ {
    name: "Calories from fat",
    value: fixedYearData["Calories from fat"]
  },
  {
    name: "Calories from carbohydrates",
    value: fixedYearData["Calories from carbohydrates"]
  }
  ]
  return resultFatCarbo;
}

const CustomPieChart = ({ filteredData }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeIndex2, setActiveIndex2] = useState(0);
  const [periodValue, setPeriodValue] = useState(2013);
  const filter = useSelector(state => state.filter.value);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  }

  const onPieEnter2 = (_, index) => {
    setActiveIndex2(index);
  }

  const handleOnChange = (_, value) => {
    setPeriodValue(value);
  }

  return (
    <div className='containerEnd'>
    <Box width={400} height={400}>
      <PieChart width={600} height={500}>
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={getPieChartData(filteredData, periodValue, setPeriodValue, parseInt(filter.years[1]), parseInt(filter.years[0]))}
          cx="50%"
          cy="50%"
          innerRadius={140}
          outerRadius={160}
          fill="#8884d8"
          dataKey="value"
          onMouseEnter={onPieEnter}
        >
          {
            getPieChartData(filteredData, periodValue, setPeriodValue, parseInt(filter.years[1]), parseInt(filter.years[0])).map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colorPicker[entry.name]}/>
            ))
          }
        </Pie>
      </PieChart>
    </Box>
    <Box width={400} height={400}>
      <PieChart width={600} height={500}>
        <Pie
          activeIndex={activeIndex2}
          activeShape={renderActiveShape}
          data={getPieChartFatCarboData(filteredData, periodValue, setPeriodValue, parseInt(filter.years[1]), parseInt(filter.years[0]))}
          cx="50%"
          cy="50%"
          innerRadius={140}
          outerRadius={160}
          fill="#8884d8"
          dataKey="value"
          onMouseEnter={onPieEnter2}
        >
          {
            getPieChartFatCarboData(filteredData, periodValue, setPeriodValue, parseInt(filter.years[1]), parseInt(filter.years[0])).map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colorPicker[entry.name]}/>
            ))
          }
        </Pie>
      </PieChart>
      <Slider
      className="countryTitle"
        getAriaLabel={() => 'Period range'}
        value={periodValue}
        onChange={handleOnChange}
        valueLabelDisplay="on"
        max={parseInt(filter.years[1])}
        min={parseInt(filter.years[0])}
        sx={{
          width: 200
        }}
      />
    </Box>
    </div>

  );
}

  export default CustomPieChart;
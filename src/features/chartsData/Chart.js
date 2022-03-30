import React from 'react'
import { useSelector } from 'react-redux'
import { filterData } from '../FilterBar/filterData';
import { ChartComponent } from './ChartComponent/ChartComponent';
import ComparaisonChartComp from './ComparaisonChartComp/ComparaisonChartComp';

export function Chart() {
  const filter = useSelector(state => state.filter.value);
  const filteredData = filterData(filter);
  
  if (filteredData[0].length !== 0 && filteredData[1].length !== 0) {
  return(
    <div className='Chart'>
      <ChartComponent key="country1" filteredData={filteredData[0]} filter={filter} />
      <ComparaisonChartComp key="comparaison" filteredData={filteredData} filter={filter} />
      <ChartComponent key="country2" filteredData={filteredData[1]} filter={filter} />
    </div>
  )
  }
  else {
    return(
      <div className='Chart'>
        <ChartComponent key="country1" filteredData={filteredData[0]} filter={filter} />
        <ChartComponent key="country2" filteredData={filteredData[1]} filter={filter} />
      </div>
    )
  }
}
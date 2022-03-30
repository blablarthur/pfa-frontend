import { configureStore } from '@reduxjs/toolkit'
import chartReducer from '../features/chartsData/chartSlice'
import filterReducer from '../features/FilterBar/filterSlice'

export default configureStore({
  reducer: {
    chart: chartReducer,
    filter: filterReducer
  }
})
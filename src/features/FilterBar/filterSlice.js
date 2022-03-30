import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    value : {
      country1: "World",
      country2: "World",
      years: ["1975","2013"],
      nutritionalTypes: [
        "Calories from animal protein",
        "Calories from plant protein",
        "Calories from fat",
        "Calories from carbohydrates",
      ]
    }
  },
  reducers: {
    setFilterCountry1: (state, action) => {
      state.value.country1= action.payload;
    },
    setFilterCountry2: (state, action) => {
      state.value.country2= action.payload;
    },
    setFilterYears: (state, action) => {
      state.value.years = action.payload;
    },
    setFilterNutritionalTypes: (state, action) => {
      state.value.nutritionalTypes = action.payload;
    }
  }
})

// Action creators are generated for each case reducer function
export const { setFilterCountry1, setFilterCountry2, setFilterYears, setFilterNutritionalTypes } = filterSlice.actions

export default filterSlice.reducer
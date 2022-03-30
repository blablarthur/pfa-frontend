import { createSlice } from '@reduxjs/toolkit'

export const chartSlice = createSlice({
  name: 'chart',
  initialState: {
    value: [{
      "Entity": "World",
      "Year": 1975,
      "Calories from animal protein (FAO (2017))": 118.97,
      "Calories from plant protein (FAO (2017))": 162.01,
      "Calories from fat (FAO (2017))": 600.48,
      "Calories from carbo / 10": 163.698,
      "Calories from carbohydrates (FAO (2017))": 1636.98
    },
    {
      "Entity": "World",
      "Year": 1976,
      "Calories from animal protein (FAO (2017))": 121.63,
      "Calories from plant protein (FAO (2017))": 162.55,
      "Calories from fat (FAO (2017))": 614.21,
      "Calories from carbo / 10": 165.161,
      "Calories from carbohydrates (FAO (2017))": 1651.61
    },
    {
      "Entity": "World",
      "Year": 1977,
      "Calories from animal protein (FAO (2017))": 122.28,
      "Calories from plant protein (FAO (2017))": 162.05,
      "Calories from fat (FAO (2017))": 616.76,
      "Calories from carbo / 10": 165.273,
      "Calories from carbohydrates (FAO (2017))": 1652.73
    },
    {
      "Entity": "World",
      "Year": 1978,
      "Calories from animal protein (FAO (2017))": 125.49,
      "Calories from plant protein (FAO (2017))": 163.3,
      "Calories from fat (FAO (2017))": 625.99,
      "Calories from carbo / 10": 166.694,
      "Calories from carbohydrates (FAO (2017))": 1666.94
    },
    {
      "Entity": "World",
      "Year": 1979,
      "Calories from animal protein (FAO (2017))": 126.15,
      "Calories from plant protein (FAO (2017))": 163.72,
      "Calories from fat (FAO (2017))": 637.53,
      "Calories from carbo / 10": 167.166,
      "Calories from carbohydrates (FAO (2017))": 1671.66
    },
    {
      "Entity": "World",
      "Year": 1980,
      "Calories from animal protein (FAO (2017))": 127.79,
      "Calories from plant protein (FAO (2017))": 164.17,
      "Calories from fat (FAO (2017))": 648.32,
      "Calories from carbo / 10": 167.954,
      "Calories from carbohydrates (FAO (2017))": 1679.54
    },
    {
      "Entity": "World",
      "Year": 1981,
      "Calories from animal protein (FAO (2017))": 128.68,
      "Calories from plant protein (FAO (2017))": 164.16,
      "Calories from fat (FAO (2017))": 656.18,
      "Calories from carbo / 10": 167.453,
      "Calories from carbohydrates (FAO (2017))": 1674.53
    },
    {
      "Entity": "World",
      "Year": 1982,
      "Calories from animal protein (FAO (2017))": 128.74,
      "Calories from plant protein (FAO (2017))": 163.59,
      "Calories from fat (FAO (2017))": 660.86,
      "Calories from carbo / 10": 167.3,
      "Calories from carbohydrates (FAO (2017))": 1673
    },
    {
      "Entity": "World",
      "Year": 1983,
      "Calories from animal protein (FAO (2017))": 128.8,
      "Calories from plant protein (FAO (2017))": 163.69,
      "Calories from fat (FAO (2017))": 660.94,
      "Calories from carbo / 10": 167.44,
      "Calories from carbohydrates (FAO (2017))": 1674.4
    },
    {
      "Entity": "World",
      "Year": 1984,
      "Calories from animal protein (FAO (2017))": 130.44,
      "Calories from plant protein (FAO (2017))": 164.31,
      "Calories from fat (FAO (2017))": 669.5,
      "Calories from carbo / 10": 167.607,
      "Calories from carbohydrates (FAO (2017))": 1676.07
    },
    {
      "Entity": "World",
      "Year": 1985,
      "Calories from animal protein (FAO (2017))": 131.43,
      "Calories from plant protein (FAO (2017))": 165.22,
      "Calories from fat (FAO (2017))": 674.92,
      "Calories from carbo / 10": 167.712,
      "Calories from carbohydrates (FAO (2017))": 1677.12
    },
    {
      "Entity": "World",
      "Year": 1986,
      "Calories from animal protein (FAO (2017))": 131.54,
      "Calories from plant protein (FAO (2017))": 165.49,
      "Calories from fat (FAO (2017))": 678.46,
      "Calories from carbo / 10": 167.973,
      "Calories from carbohydrates (FAO (2017))": 1679.73
    },
    {
      "Entity": "World",
      "Year": 1987,
      "Calories from animal protein (FAO (2017))": 133.16,
      "Calories from plant protein (FAO (2017))": 166.8,
      "Calories from fat (FAO (2017))": 682.63,
      "Calories from carbo / 10": 168.531,
      "Calories from carbohydrates (FAO (2017))": 1685.31
    },
    {
      "Entity": "World",
      "Year": 1988,
      "Calories from animal protein (FAO (2017))": 132.77,
      "Calories from plant protein (FAO (2017))": 167,
      "Calories from fat (FAO (2017))": 690.36,
      "Calories from carbo / 10": 168.425,
      "Calories from carbohydrates (FAO (2017))": 1684.25
    },
    {
      "Entity": "World",
      "Year": 1989,
      "Calories from animal protein (FAO (2017))": 132.06,
      "Calories from plant protein (FAO (2017))": 166.5,
      "Calories from fat (FAO (2017))": 694.37,
      "Calories from carbo / 10": 167.667,
      "Calories from carbohydrates (FAO (2017))": 1676.67
    },
    {
      "Entity": "World",
      "Year": 1990,
      "Calories from animal protein (FAO (2017))": 131.97,
      "Calories from plant protein (FAO (2017))": 165.08,
      "Calories from fat (FAO (2017))": 692.94,
      "Calories from carbo / 10": 166.06,
      "Calories from carbohydrates (FAO (2017))": 1660.6
    },
    {
      "Entity": "World",
      "Year": 1991,
      "Calories from animal protein (FAO (2017))": 130.05,
      "Calories from plant protein (FAO (2017))": 164.14,
      "Calories from fat (FAO (2017))": 679.67,
      "Calories from carbo / 10": 164.108,
      "Calories from carbohydrates (FAO (2017))": 1641.08
    },
    {
      "Entity": "World",
      "Year": 1992,
      "Calories from animal protein (FAO (2017))": 125.46,
      "Calories from plant protein (FAO (2017))": 161.92,
      "Calories from fat (FAO (2017))": 667.19,
      "Calories from carbo / 10": 162.507,
      "Calories from carbohydrates (FAO (2017))": 1625.07
    },
    {
      "Entity": "World",
      "Year": 1993,
      "Calories from animal protein (FAO (2017))": 125.6,
      "Calories from plant protein (FAO (2017))": 161.46,
      "Calories from fat (FAO (2017))": 666.6,
      "Calories from carbo / 10": 162.159,
      "Calories from carbohydrates (FAO (2017))": 1621.59
    },
    {
      "Entity": "World",
      "Year": 1994,
      "Calories from animal protein (FAO (2017))": 126.19,
      "Calories from plant protein (FAO (2017))": 163.3,
      "Calories from fat (FAO (2017))": 665.16,
      "Calories from carbo / 10": 163.311,
      "Calories from carbohydrates (FAO (2017))": 1633.11
    },
    {
      "Entity": "World",
      "Year": 1995,
      "Calories from animal protein (FAO (2017))": 127.47,
      "Calories from plant protein (FAO (2017))": 163.48,
      "Calories from fat (FAO (2017))": 673.31,
      "Calories from carbo / 10": 163.589,
      "Calories from carbohydrates (FAO (2017))": 1635.89
    },
    {
      "Entity": "World",
      "Year": 1996,
      "Calories from animal protein (FAO (2017))": 127.58,
      "Calories from plant protein (FAO (2017))": 164.15,
      "Calories from fat (FAO (2017))": 674.44,
      "Calories from carbo / 10": 164.995,
      "Calories from carbohydrates (FAO (2017))": 1649.95
    },
    {
      "Entity": "World",
      "Year": 1997,
      "Calories from animal protein (FAO (2017))": 128.25,
      "Calories from plant protein (FAO (2017))": 164.55,
      "Calories from fat (FAO (2017))": 679.81,
      "Calories from carbo / 10": 165.358,
      "Calories from carbohydrates (FAO (2017))": 1653.58
    },
    {
      "Entity": "World",
      "Year": 1998,
      "Calories from animal protein (FAO (2017))": 129.58,
      "Calories from plant protein (FAO (2017))": 165.35,
      "Calories from fat (FAO (2017))": 687.11,
      "Calories from carbo / 10": 165.484,
      "Calories from carbohydrates (FAO (2017))": 1654.84
    },
    {
      "Entity": "World",
      "Year": 1999,
      "Calories from animal protein (FAO (2017))": 131.69,
      "Calories from plant protein (FAO (2017))": 166.25,
      "Calories from fat (FAO (2017))": 691.76,
      "Calories from carbo / 10": 166.319,
      "Calories from carbohydrates (FAO (2017))": 1663.19
    },
    {
      "Entity": "World",
      "Year": 2000,
      "Calories from animal protein (FAO (2017))": 133.05,
      "Calories from plant protein (FAO (2017))": 166.18,
      "Calories from fat (FAO (2017))": 699.67,
      "Calories from carbo / 10": 166.816,
      "Calories from carbohydrates (FAO (2017))": 1668.16
    },
    {
      "Entity": "World",
      "Year": 2001,
      "Calories from animal protein (FAO (2017))": 134.22,
      "Calories from plant protein (FAO (2017))": 167.28,
      "Calories from fat (FAO (2017))": 707.99,
      "Calories from carbo / 10": 167.604,
      "Calories from carbohydrates (FAO (2017))": 1676.04
    },
    {
      "Entity": "World",
      "Year": 2002,
      "Calories from animal protein (FAO (2017))": 136.35,
      "Calories from plant protein (FAO (2017))": 167.97,
      "Calories from fat (FAO (2017))": 716.16,
      "Calories from carbo / 10": 167.994,
      "Calories from carbohydrates (FAO (2017))": 1679.94
    },
    {
      "Entity": "World",
      "Year": 2003,
      "Calories from animal protein (FAO (2017))": 136.5,
      "Calories from plant protein (FAO (2017))": 168.77,
      "Calories from fat (FAO (2017))": 718.19,
      "Calories from carbo / 10": 168.632,
      "Calories from carbohydrates (FAO (2017))": 1686.32
    },
    {
      "Entity": "World",
      "Year": 2004,
      "Calories from animal protein (FAO (2017))": 137.29,
      "Calories from plant protein (FAO (2017))": 169.04,
      "Calories from fat (FAO (2017))": 729.75,
      "Calories from carbo / 10": 169.452,
      "Calories from carbohydrates (FAO (2017))": 1694.52
    },
    {
      "Entity": "World",
      "Year": 2005,
      "Calories from animal protein (FAO (2017))": 139.71,
      "Calories from plant protein (FAO (2017))": 170.1,
      "Calories from fat (FAO (2017))": 737.6,
      "Calories from carbo / 10": 169.998,
      "Calories from carbohydrates (FAO (2017))": 1699.98
    },
    {
      "Entity": "World",
      "Year": 2006,
      "Calories from animal protein (FAO (2017))": 140.55,
      "Calories from plant protein (FAO (2017))": 171.03,
      "Calories from fat (FAO (2017))": 745.61,
      "Calories from carbo / 10": 170.879,
      "Calories from carbohydrates (FAO (2017))": 1708.79
    },
    {
      "Entity": "World",
      "Year": 2007,
      "Calories from animal protein (FAO (2017))": 143.97,
      "Calories from plant protein (FAO (2017))": 171.8,
      "Calories from fat (FAO (2017))": 753.86,
      "Calories from carbo / 10": 171.609,
      "Calories from carbohydrates (FAO (2017))": 1716.09
    },
    {
      "Entity": "World",
      "Year": 2008,
      "Calories from animal protein (FAO (2017))": 145.12,
      "Calories from plant protein (FAO (2017))": 172.47,
      "Calories from fat (FAO (2017))": 759.73,
      "Calories from carbo / 10": 171.741,
      "Calories from carbohydrates (FAO (2017))": 1717.41
    },
    {
      "Entity": "World",
      "Year": 2009,
      "Calories from animal protein (FAO (2017))": 144.9,
      "Calories from plant protein (FAO (2017))": 173.87,
      "Calories from fat (FAO (2017))": 760.57,
      "Calories from carbo / 10": 172.432,
      "Calories from carbohydrates (FAO (2017))": 1724.32
    },
    {
      "Entity": "World",
      "Year": 2010,
      "Calories from animal protein (FAO (2017))": 145.16,
      "Calories from plant protein (FAO (2017))": 175.03,
      "Calories from fat (FAO (2017))": 768.6,
      "Calories from carbo / 10": 172.587,
      "Calories from carbohydrates (FAO (2017))": 1725.87
    },
    {
      "Entity": "World",
      "Year": 2011,
      "Calories from animal protein (FAO (2017))": 146.37,
      "Calories from plant protein (FAO (2017))": 175.9,
      "Calories from fat (FAO (2017))": 774.81,
      "Calories from carbo / 10": 173.059,
      "Calories from carbohydrates (FAO (2017))": 1730.59
    },
    {
      "Entity": "World",
      "Year": 2012,
      "Calories from animal protein (FAO (2017))": 146.84,
      "Calories from plant protein (FAO (2017))": 175.95,
      "Calories from fat (FAO (2017))": 778.34,
      "Calories from carbo / 10": 173.367,
      "Calories from carbohydrates (FAO (2017))": 1733.67
    }]
  },
  reducers: {
    set: (state, action) => {
      state.value = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { set } = chartSlice.actions

export default chartSlice.reducer
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import Link from '@mui/material/Link';
import Slider from '@mui/material/Slider';
import { Chart } from '../chartsData/Chart';
import MultipleSelect from '../MultipleSelect/MultipleSelect';
import ListCheckbox from './ListCheckbox/ListCheckbox';
import { setFilterCountry1, setFilterCountry2, setFilterYears } from '../FilterBar/filterSlice';
import { filterDataCountry, minPeriodCountries } from '../FilterBar/filterData';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [periodValue, setPeriodValue] = useState([1975, 2013]);
  const [minValueSlider, setMinValueSlider] = useState(1975);
  const [selectedCountry1, setSelectedCountry1] = useState(["World"]);
  const [selectedCountry2, setSelectedCountry2] = useState(["World"]);
  const filter = useSelector(state => state.filter.value);
  const filteredData = filterDataCountry(filter.country1, filter.country2);
  const dispatch = useDispatch();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const updateWhenCountrySelected = (state, setFilterCountry) => {
    const [filteredDataCountry, _] = filterDataCountry(state, state);
    const minPeriodNewCountry = minPeriodCountries(filteredDataCountry, filteredData[1]);
    if (minPeriodNewCountry > filter.years[0]) {
      dispatch(setFilterYears([minPeriodNewCountry, filter.years[1]]));
    }
    setMinValueSlider(minPeriodNewCountry);
    dispatch(setFilterCountry(state));
  }

  const handleChangeSlider = (_, newPeriodValue) => {
    const minPeriod = minPeriodCountries(filteredData[0], filteredData[1]);
    setMinValueSlider(minPeriod);
    setPeriodValue(newPeriodValue);
    setPeriodValue((period) => {
      dispatch(setFilterYears(period));

      return period;
    });
  };

  

  const handleChangeSelectCountry1 = (value, newSelectedOption) => {
    switch (newSelectedOption.action) {
      case 'select-option':
        setSelectedCountry1(value.label);
        break;
      case 'clear':
        setSelectedCountry1([]);
        break;
      default:
        console.error(value, newSelectedOption);
        break;
    }

    setSelectedCountry1((state) => {
      updateWhenCountrySelected(state, setFilterCountry1);
      return state;
    });
  }

    const handleChangeSelectCountry2 = (value, newSelectedOption) => {
      console.log(newSelectedOption);
      switch (newSelectedOption.action) {
        case 'select-option':
          setSelectedCountry2(value.label);
          break;
        case 'clear':
          setSelectedCountry2([]);
          break;
        default:
          console.error(value, newSelectedOption);
          break;
      }

      setSelectedCountry2((state) => {
        updateWhenCountrySelected(state, setFilterCountry2);
        return state;
      });
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Evolution of Nutritional Values and Obesity
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem key={"slider"}>
            <Slider
            className="slider"
            getAriaLabel={() => 'Period range'}
            value={periodValue}
            onChange={handleChangeSlider}
            valueLabelDisplay="on"
            max={2013}
            min={minValueSlider}
          />
          </ListItem>
          <Divider />
          <ListItem key={"select-country-1"}>
            <MultipleSelect
              handleChangeSelectCountry={handleChangeSelectCountry1}
            />
          </ListItem>
          <Divider />
          <ListItem key={"select-country-2"}>
            <MultipleSelect
              handleChangeSelectCountry={handleChangeSelectCountry2}
            />
          </ListItem>
        </List>
        <Divider />
        <ListCheckbox />
        <Divider />
        <div>
          <Link href="https://www.fao.org/faostat/en/#home">FAO Dataset on Nutrional Values in the world</Link>
          <div />
          <Link href="https://www.who.int/data/gho/data/indicators/indicator-details/GHO/prevalence-of-obesity-among-adults-bmi-=-30-(crude-estimate)-(-)">WHO Dataset on Obesity in the world</Link>
        </div>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Chart />
      </Main>
    </Box>
  );
}

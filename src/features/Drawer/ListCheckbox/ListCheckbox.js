import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { setFilterNutritionalTypes } from '../../FilterBar/filterSlice';
import { useDispatch } from 'react-redux'

const checkboxElm = [
  "Calories from animal protein",
  "Calories from plant protein",
  "Calories from fat",
  "Calories from carbohydrates",
]

export default function ListCheckbox() {
  const [checked, setChecked] = React.useState([
    "Calories from animal protein",
    "Calories from plant protein",
    "Calories from fat",
    "Calories from carbohydrates"
  ]);
  const dispatch = useDispatch();

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    setChecked((nutritionalValue) => {
      dispatch(setFilterNutritionalTypes(nutritionalValue));
      return nutritionalValue;
    })
  };

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {checkboxElm.map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
            key={value}
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`${value}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}

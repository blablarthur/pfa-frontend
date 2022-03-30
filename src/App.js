import "./App.css";
import React from "react";
import PersistentDrawerLeft from "./features/Drawer/Drawer";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const outerTheme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
  },
});

    

const App = () => {
  return (
    <ThemeProvider theme={outerTheme}>
      <PersistentDrawerLeft />
    </ThemeProvider>
  );
}

export default App;

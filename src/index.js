import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import App from './App'
import LandingPage from "./component/05_pages/LandingPage";
import {ThemeProvider} from "styled-components";
import {colors, breakpoints} from "./theme";


const theme = {
    colors,
    breakpoints
}

ReactDOM.render(
    <ThemeProvider theme={theme}>
    <BrowserRouter forceRefresh={true}>
            < LandingPage/>
    </BrowserRouter>
    </ThemeProvider>,

    document.getElementById('root')
);



reportWebVitals();

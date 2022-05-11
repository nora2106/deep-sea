import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingPage from "./component/05_pages/LandingPage";
import DefaultGrid from './component/05_pages/DefaultGrid'
import {ThemeProvider} from "styled-components";
import {colors, breakpoints} from "./theme";


const theme = {
    colors,
    breakpoints
}

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <BrowserRouter forceRefresh={true}>
            <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/grid" element={<DefaultGrid/>} />
            </Routes>
        </BrowserRouter>
    </ThemeProvider>,

    document.getElementById('root')
);



reportWebVitals();

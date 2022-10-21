import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingPage from "./component/05_pages/LandingPage";
import MapMenu from "./component/05_pages/MapMenu";
import DiscoverPage from "./component/05_pages/DiscoverPage";
import SearchPage from "./component/05_pages/SearchPage";
import {ThemeProvider} from "styled-components";
import {colors, breakpoints,animations} from "./theme";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'

library.add(fas, faTwitter, faFontAwesome)

const theme = {
    colors,
    breakpoints,
    animations
}


ReactDOM.render(

    <ThemeProvider theme={theme}>
        <BrowserRouter forceRefresh={true}>
            <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/map" element={<MapMenu/>} />
            <Route path="/discover" element={<DiscoverPage/>} />
            <Route path="/search" element={<SearchPage/>} />
            </Routes>
        </BrowserRouter>
    </ThemeProvider>,

    document.getElementById('root')
);


reportWebVitals();

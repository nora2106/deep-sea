import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingPage from "./component/05_pages/LandingPage";
import MapPage from "./component/05_pages/MapPage";
import DiscoverPage from "./component/05_pages/DiscoverPage";
import SearchPage from "./component/05_pages/SearchPage";
import {ThemeProvider} from "styled-components";
import {colors, breakpoints, animations} from "./component/00_base/theme/theme";
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {faTwitter, faFontAwesome} from '@fortawesome/free-brands-svg-icons'
import {ModeContextProvider} from "./component/00_base/theme/ModeContext";
import GlobalStyle from '././component/00_base/theme/globalStyles'

library.add(fas, faTwitter, faFontAwesome)

const theme = {
    colors,
    breakpoints,
    animations
}

ReactDOM.render(
    <ModeContextProvider>
        <ThemeProvider theme={theme}>
                <BrowserRouter forceRefresh={true}>
                    <Routes>
                        <Route path="/" element={<LandingPage/>}/>
                        <Route path="/map" element={<MapPage/>}/>
                        <Route path="/discover" element={<DiscoverPage/>}/>
                        <Route path="/search" element={<SearchPage/>}/>
                    </Routes>
                </BrowserRouter>
        </ThemeProvider>
    </ModeContextProvider>,

    document.getElementById('root')
);


reportWebVitals();

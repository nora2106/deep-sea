import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import App from './App'
import LandingPage from "./component/05_pages/LandingPage";

ReactDOM.render(
    <BrowserRouter forceRefresh={true}>
        < LandingPage/>
    </BrowserRouter>,


    document.getElementById('root')
);



reportWebVitals();

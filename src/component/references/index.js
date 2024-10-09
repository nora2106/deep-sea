import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LandingPage from './components/03_organisms/pages/LandingPage.js';
import LobbyPage from "./components/03_organisms/pages/LobbyPage";
import GamePage from "./components/03_organisms/pages/GamePage";
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter forceRefresh={true}>
    < App/>
  </BrowserRouter>,


  document.getElementById('root')
);
function App() {
   // console.log("return");

    return (
        <main >
            <Switch >
                <Route path='/' component={LandingPage} exact />
                <Route path='/lobby' component={LobbyPage}/>
                <Route  path='/game' component={GamePage}/>
            </Switch>
        </main>
    );
}


reportWebVitals();

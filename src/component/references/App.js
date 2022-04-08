import logo from './splash.svg';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LobbyPage from "./components/03_organisms/pages/LobbyPage";
import LandingPage from "./components/03_organisms/pages/LandingPage";

function App() {
    return (
     <main>
         <Switch>
            <Route path='/' component={LandingPage}/>
             <Route path='/lobby' component={LobbyPage}/>
         </Switch>
     </main>
    );
}

export default App;

import React, {createContext, useState} from 'react';
import GlobalStyle from './globalStyles'

const ModeContext = createContext();
function ModeContextProvider(props) {
    const [light, setLight] = useState((localStorage.getItem('light') || 'off'));
    const toggleLight = () => {
        if(light === "off") {
            setLight('on');
            window.localStorage.setItem('light', 'on');
        }
        else {
            setLight('off')
            window.localStorage.setItem('light', 'off');
        }
    };

    return (
        <div>
            <ModeContext.Provider value={{light, toggleLight}}>
                <GlobalStyle/>
                {props.children}
            </ModeContext.Provider>
        </div>
    )
};

export {ModeContext, ModeContextProvider};
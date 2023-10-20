import React, {createContext, useEffect, useState} from 'react';

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
        // setLight(!light);
        // if (light === true) {
        //     window.localStorage.setItem('light', 'on');
        //     setTest('on')
        // } else {
        //     window.localStorage.setItem('light', 'off');
        //     setTest('off')
        // }
    };

    return (
        <div>
            <ModeContext.Provider value={{light, toggleLight}}>
                {props.children}
            </ModeContext.Provider>
        </div>
    )
};

export {ModeContext, ModeContextProvider};
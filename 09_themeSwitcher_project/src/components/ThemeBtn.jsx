import React from 'react'
import useTheme from '../contexts/theme';

export default function ThemeBtn() {

    const {themeMode, lightTheme, darkTheme} = useTheme();

    const changeTheme = () => {
        if(themeMode==="dark"){
            lightTheme();
        }
        else{
            darkTheme();
        }
    }

    return (
        <div className="form-check form-switch">
            <input 
            checked={themeMode==="dark"}
            onChange={changeTheme}
            className="form-check-input" type="checkbox"/>
            <label className="form-check-label ms-2">Toggle Theme</label>
        </div>
    )
}

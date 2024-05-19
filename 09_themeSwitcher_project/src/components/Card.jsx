import React from 'react'
import useTheme from '../contexts/theme';

export default function Card() {

    const {themeMode} = useTheme();
    let oppositeTheme = "dark";
    if(themeMode==="dark") oppositeTheme = "light"

    return (
        <div className={"w-100 border rounded-3 bg-" + themeMode}>
            <a href="/">
                <img className="p-3 w-100" src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
            </a>
            <div className="px-3 pb-3">
                <h5 className={"text-center text-" + oppositeTheme}>
                    Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                </h5>
            </div>
        </div>
    );
}
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavigationList = (props) => {
    return props.list.map((value, index) => {
        return <li key={index}><Link to={"/"+value}>{value}</Link></li>
    });
}

const NavigationSection = (props) => {
    
    const [dropDown, setDropDown] = useState(true);

    const toggleDropDown = () => {
        setDropDown(prevDropDown => !prevDropDown);
    }

    if(dropDown) {
        return (
            <>
                <p>{props.title}</p>
                <button onClick={toggleDropDown}>&#x25BC;</button>
                <ul>
                    <NavigationList list={props.list} />
                </ul>
            </>
        );
    } else {
        return (
            <>
                <p>{props.title}</p>
                <button onClick={toggleDropDown}>&#x25B2;</button>
            </>
        );
    }

}

export default NavigationSection
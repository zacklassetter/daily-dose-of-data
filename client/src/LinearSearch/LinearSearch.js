import React, { useState, useRef, useEffect, useCallback } from 'react';
import './LinearSearch.scss';
import Element from '../Element/Element';

//react component to display a linear search array
const ArrayDisplay = (props) => {
    return props.array.map((value, index) => {
        if (index === props.focus)
            return <Element key={index} value={value} border="bordered" />;
        else if (index === props.green)
            return <Element key={index} value={value} color="green" />;
        else if (index === props.pink)
            return <Element key={index} value={value} color="pink" />;
        else
            return <Element key={index} value={value} />;
    });
}

//react component for linear search
const LinearSearch = () => {

    const [, forceRender] = useState(0);
    const [array, setArray] = useState([]);
    const arraySizeInput = useRef();
    const searchInput = useRef();
    const speedSlider = useRef();
    const searching = useRef();
    const searchValue = useRef(null);
    const focus = useRef(null);
    const interval = useRef();
    const green = useRef();
    const pink = useRef();

    //We call update on fake state variable to force rerender
	const forceUpdate = () => {
		forceRender(renders => renders+1);
	}

    //sets state array to a random array for sorting
    const generateArray = () => {
        if (searching.current) {
            toggleAnimation();
        }
        focus.current = null;
        green.current = null;
        pink.current = null;
        var size = parseInt(arraySizeInput.current.value);
        if(isNaN(size))
            size = randInt(5,50);
        if (size > 0) {
            setArray(randomArray(size));
        }
        arraySizeInput.current.value = null;
    }
    //generates a random array within reasonable bounds
    const randomArray = useCallback((size) => {
        var newArray = new Array(size);
            for (let i = 0; i < size; i++) {
                newArray[i] = randInt(-999, 1000);
            }
        return newArray;
    }, []);
    const randInt = (min, max) => {
        return Math.floor(Math.random() * (max-min) + min);
    }

    //initialize the array randomly at start
    useEffect(() => {
        setArray(randomArray(randInt(5,50)));
    }, [randomArray]);

    //function to start searching animation
    const search = () => {
        if (searching.current)
            toggleAnimation();
        var data = parseInt(searchInput.current.value);
        if (isNaN(data))
            data = 0;
        searchInput.current.value = null;
        searchValue.current = data;
        toggleAnimation();
        focus.current = 0;
        forceUpdate();
    }

    //function to 1 step of searching animation
    const searchingStep = () => {
        if (array[focus.current] === searchValue.current) {
            green.current = focus.current;
            focus.current = null;
            toggleAnimation();
        } else if (focus.current === array.length-1) {
            pink.current = array.length-1;
            focus.current = null;
            toggleAnimation();
        } else {
            focus.current++;
        }
    }

    //function to turn searching on and off by button click
    const toggleAnimation = () => {
        if (searching.current) {
            clearInterval(interval.current);
            searching.current = false;
        } else {
            interval.current = setInterval(() => {
                searchingStep();
                forceUpdate();
            }, 1000-speedSlider.current.value);
            searching.current = true;
            focus.current = null;
            green.current = null;
            pink.current = null;
        }
    }

    //changes the animation speed of searching when the slider changes
    const updateSpeed = () => {
        if (searching.current) {
            clearInterval(interval.current);
            interval.current = setInterval(() => {
                searchingStep();
                forceUpdate();
            }, 1000-speedSlider.current.value);
        }
    }

    return (
        <div className="linear-search">
            <div id="main">
                <div className="controls">
                    <button id="randomButton" onClick={generateArray}>Random</button>
                    <span className="labeledInput">
                        <label>Array Size</label>
                        <input id="arraySizeInput" ref={arraySizeInput} type="text"></input>
                    </span>
                    <br />
                    <button id="searchButton" onClick={search}>Search</button>
                    <input id="searchInput" ref={searchInput} type="text"></input>
                    <br />
                    <span className="labeledSlider">
                        <label>Animation Speed</label>
                        <input className="slider" ref={speedSlider} onChange={updateSpeed} min="0" max="990" type="range"></input>
                    </span>
                </div>
                <div className="visualization">
                    <ArrayDisplay array={array} focus={focus.current} green={green.current} pink={pink.current} />
                </div>
            </div>
            <div className="legend">
                <Element color="green"></Element>
                <p>= Element Found</p>
                < br />
                <Element color="pink"></Element>
                <p>= Element Not Found</p>
                <br />
                <Element border="bordered"></Element>
                <p>= Current Focus</p>
            </div>
        </div>
    );

}

export default LinearSearch;
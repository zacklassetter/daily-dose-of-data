import React, { useState, useRef, useEffect, useCallback } from 'react';
import './BubbleSort.scss';
import Element from '../Element/Element';

const BubbleSortDisplay = (props) => {
    return props.array.map((value, index) => {
        if (index > props.sortedStart.current) {
            return <Element key={index} value={value} color="green"/>
        }
        if (index === props.focusOne.current || index === props.focusTwo.current) {
            if (index === props.min.current) {
                return <Element key={index} value={value} color="pink" border="bordered" />
            }
            if (index === props.max.current) {
                return <Element key={index} value={value} color="yellow" border="bordered" />
            }
            else return <Element key={index} value={value} border="bordered" />
            
        }
        return <Element key={index} value={value} />
    });
}



const BubbleSort = () => {
    const [, forceRender] = useState(0);
    const [array, setArray] = useState([]);
    const [sorted, setSorted] = useState(false);
    const sorting = useRef(false);
    const interval = useRef(null);
    const swappedOnPass = useRef(false);
    const sortedStart = useRef(array.length - 1);
    const focusOne = useRef(-1);
    const focusTwo = useRef(-1);
    const min = useRef(-1);
    const max = useRef(-1);
    const toggleSortingButton = useRef();
    const generateArrayButton = useRef();
    const arraySizeInput = useRef();
    const speedSlider = useRef();
    
    //We call update on fake state variable to force rerender
    const forceUpdate = () => {
        forceRender(renders => renders + 1);
    }

    //sets state array to a random array for sorting
    const generateArray = () => {
        if (sorting.current) {
            toggleSorting();
        }
        var size = parseInt(arraySizeInput.current.value);
        if(isNaN(size))
            size = randInt(5,50);
        if (size > 0) {
            setArray(randomArray(size));
            setSorted(false);
            sortedStart.current = size - 1;
            focusOne.current = -1;
            focusTwo.current = -1;
            min.current = -1;
            max.current = -1
            //swappedOnPass.current = false;
            //sorting.current = false;
            //currentMinimum.current = -1;
        }
        arraySizeInput.current.value = null;
    }
    //generates a random array within reasonable bounds
    const randomArray = useCallback((size) => {
        var newArray = new Array(size);
            for (let i = 0; i < size; i++) {
                newArray[i] = randInt(-999, 1000);
            }
        sortedStart.current = size - 1;
        return newArray;
    }, []);
    const randInt = (min, max) => {
        return Math.floor(Math.random() * (max-min) + min);
    }

    //initialize the array randomly at start
    useEffect(() => {
        setArray(randomArray(randInt(5,50)));
    }, [randomArray]);

    function swap(arr, x, y) {
        var temp = arr[x];
        arr[x] = arr[y];
        arr[y] = temp;
    }

    //completes one step of the sorting algorithm
    const sortingStep = () => {
        if (max.current === 1 && sortedStart.current === 1) {
            sortedStart.current = -1;
            return;
        }

        if (sortedStart.current <= 0) {
            setSorted(true);
            toggleSorting();
            return;
        }
        if (focusOne.current === -1 && focusTwo.current === -1){
            focusOne.current = 0;
            focusTwo.current = 1;
            return;
        }
        if (max.current >= sortedStart.current) {
            if (swappedOnPass.current === false) {
                sortedStart.current = -1;
            }

            min.current = -1;
            max.current = -1;
            focusOne.current = 0;
            focusTwo.current = 1;
            swappedOnPass.current = false;
            sortedStart.current--;
            
        }
        if (min.current === -1) {
            if (array[focusOne.current] < array[focusTwo.current]) {
                min.current = focusOne.current;
                max.current = focusTwo.current;
            }
            else {
                min.current = focusTwo.current;
                max.current = focusOne.current;
            }
        }
        else if (min.current > max.current) {
            swap(array, min.current, max.current);
            swappedOnPass.current = true;
            var temp = max.current;
            max.current = min.current;
            min.current = temp;
        } 
        else {
            min.current = -1;
            max.current = -1;
            focusOne.current++;
            focusTwo.current++;
            
        }
        
    }

    //function to turn sorting on and off by button click
    const toggleSorting = () => {
        if (sorting.current) {
            clearInterval(interval.current);
            sorting.current = false;
            toggleSortingButton.current.innerHTML = "Sort";
            toggleSortingButton.current.classList.remove("pinkButton");
            toggleSortingButton.current.classList.add("greenButton");
        }
        else if (!sorted) {
            interval.current = setInterval(() => {
                sortingStep();
                forceUpdate();
            }, 1000 - speedSlider.current.value);
            sorting.current = true;
            toggleSortingButton.current.innerHTML = "Stop";
            toggleSortingButton.current.classList.remove("greenButton");
            toggleSortingButton.current.classList.add("pinkButton");
        }
    }

    //changes the animation speed of sorting when the slider changes
    const updateSpeed = () => {
        if (sorting.current) {
            clearInterval(interval.current);
            interval.current = setInterval(() => {
                sortingStep();
                forceUpdate();
            }, 1000 - speedSlider.current.value);
        }
    }

    return (
        <div className="bubble-sort">
            <div id="main">
                <div className="controls">
                    <button id="randomButton" ref={generateArrayButton} onClick={generateArray}>Random</button>
                    <span className="labeledInput">
                        <label>Array Size</label>
                        <input id="arraySizeInput" ref={arraySizeInput} type="text"></input>
                    </span>
                    <br />
                    <button id="toggleSortingButton" className="greenButton" ref={toggleSortingButton} onClick={toggleSorting}>Sort</button>
                    <br />
                    <span className="labeledSlider">
                        <label>Animation Speed</label>
                        <input className="slider" ref={speedSlider} onChange={updateSpeed} min="0" max="990" type="range"></input>
                    </span>
                </div>
                <div className="visualization">
                    <BubbleSortDisplay array={array} sortedStart={sortedStart} focusOne={focusOne} focusTwo={focusTwo} min={min} max={max}/>
                </div>
            </div>
            <div className="legend">
                <Element color="green"></Element>
                <p>= Sorted</p>
                < br />
                <Element></Element>
                <p>= Unsorted</p>
                <br />
                <Element border="bordered"></Element>
                <p>= Current Focuses</p>
                <br />
                <Element color="pink"></Element>
                <p>= Lesser of Focuses</p>
                <br />
                <Element color="yellow"></Element>
                <p>= Greater of Focuses</p>
            </div>
        </div>);
}

export default BubbleSort;
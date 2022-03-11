import React, { useState, useRef, useEffect, useCallback } from 'react';
import './InsertionSort.scss';
import Element from '../Element/Element';


const InsertionSortDisplay = (props) => {
    return props.array.map((value, index) => {
        if (index === props.currentCompare && index === props.currentInserting)
            return <Element key={index} value={value} color="yellow" border="bordered" />

        if (index === props.currentCompare)
            return <Element key={index} value={value} color="green" border="bordered" />

        if (index === props.currentInserting)
            return <Element key={index} value={value} color="yellow" />

        if (index < props.sortedEndIndex)
            return <Element key={index} value={value} color="green" />

        return <Element key={index} value={value} />
    });
}

const InsertionSort = () => {

    const [, forceRender] = useState(0);
    const [array, setArray] = useState([]);
    const [sorted, setSorted] = useState(false);
    const sorting = useRef(false);
    const interval = useRef(null);
    const sortedEndIndex = useRef(-1);
    const currentInserting = useRef(-1);
    const currentCompare = useRef(-1);
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
            sortedEndIndex.current = -1;
            currentInserting.current = -1;
            currentCompare.current = -1;
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
        return Math.floor(Math.random() * (max - min) + min);
    }

    //initialize the array randomly at start
    useEffect(() => {
        setArray(randomArray(randInt(5,50)));
    }, [randomArray]);

    //completes one step of the sorting algorithm
    const sortingStep = () => {
        
        if (sortedEndIndex.current >= array.length) {
            setSorted(true);
            toggleSorting();
            currentCompare.current = -1;
            currentInserting.current = -1;
        }
        //if found lower element, insert current after that, restart process
        else if (array[currentCompare.current] < array[currentInserting.current]) {
            let temp = array[currentInserting.current];
            for (let i = currentInserting.current - 1; i > currentCompare.current; i--) {
                array[i + 1] = array[i];
            }
            array[currentCompare.current + 1] = temp;
            currentInserting.current++;
            currentCompare.current = currentInserting.current;
            sortedEndIndex.current++;
        }
        //if at end of sorted and none lower found, insert at beginning, restart process
        else if (currentCompare.current === 0) {
            let temp = array[currentInserting.current];
            for (let i = currentInserting.current - 1; i >= currentCompare.current; i--) {
                array[i + 1] = array[i];
            }
            array[currentCompare.current] = temp;
            currentInserting.current++;
            currentCompare.current = currentInserting.current;
            sortedEndIndex.current++;
        }
        else if (currentInserting.current === -1) {
            currentInserting.current++;
            sortedEndIndex.current = 1;
            currentCompare.current = currentInserting.current;
        }
        else {
            currentCompare.current--;
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
        } else if (!sorted) {
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
        <div className="insertion-sort">
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
                    <InsertionSortDisplay array={array} sortedEndIndex={sortedEndIndex.current} currentInserting={currentInserting.current} currentCompare={currentCompare.current} />
                </div>
            </div>
            <div className="legend">
                <Element color="green"></Element>
                <p>= Sorted</p>
                < br />
                <Element></Element>
                <p>= Unsorted</p>
                <br />
                <Element color="yellow"></Element>
                <p>= Current Element to be Inserted</p>
                <br />
                <Element color="green" border="bordered"></Element>
                <p>= Current Focus</p>
            </div>
        </div>
        );
}

export default InsertionSort;
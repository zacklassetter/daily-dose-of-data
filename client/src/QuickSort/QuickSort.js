import React, { useState, useRef, useEffect, useCallback } from 'react';
import './QuickSort.scss';
import Element from '../Element/Element';

const QuickSortDisplay = (props) => {
    return props.array.map((value, index) => {
        if (index === props.pivot.current)
            return <Element key={index} value={value} color="purple" />
        if (index === props.low.current && index === props.high.current)
            return <Element key={index} value={value} border="bordered" color="yellow" />
        if (index === props.low.current)
            return <Element key={index} value={value} border="bordered" color="pink" />
        if (index === props.high.current)
            return <Element key={index} value={value} border="bordered" color="green" />
        if (props.sortedElements.current.includes(index))
            return <Element key={index} value={value} color="green" />
        else return <Element key={index} value={value} />
    });
}


const QuickSort = () => {
    const [, forceRender] = useState(0);
    const [array, setArray] = useState([]);
    const interval = useRef(null);
    const sorting = useRef(false);
    const [sorted, setSorted] = useState(false);
    const toggleSortingButton = useRef();
    const generateArrayButton = useRef();
    const arraySizeInput = useRef();
    const speedSlider = useRef();

    const sortedElements = useRef([]);
    const worklist = useRef([]);
    const low = useRef(-1);
    const high = useRef(-1);
    const pivot = useRef(-1);


    //We call update on fake state variable to force rerender
    const forceUpdate = () => {
        forceRender(renders => renders + 1);
    }

    function swap(arr, x, y) {
        var temp = arr[x];
        arr[x] = arr[y];
        arr[y] = temp;
    }

    function buildSorted(size) {
        var arr = [];
        for (var i = 0; i < size; i++) {
            arr.push(i);
        }
        return arr;
    }

    const sortingStep = () => {
        if (sortedElements.current.length === array.length) {
            clearInterval(interval.current);
            sorting.current = false;
            toggleSortingButton.current.innerHTML = "Sort";
            toggleSortingButton.current.classList.remove("pinkButton");
            toggleSortingButton.current.classList.add("greenButton");
        }

        
        if (array.length === 1) {
            sortedElements.current.push(0);
        }
        if (pivot.current === -1) {
            //initial step
            if (sortedElements.current.length === 0) {
                pivot.current = array.length - 1;
                low.current = 0;
                high.current = array.length - 2;
            }
            else {
                low.current = worklist.current.shift();
                pivot.current = worklist.current.shift();
                if (!sortedElements.current.includes(pivot.current - 1)) high.current = pivot.current - 1;

                if (pivot.current === 0) {
                    sortedElements.current.push(pivot.current);
                    low.current = -1;
                    pivot.current = -1;
                    high.current = -1;
                }
            }
        }
        else {
            if (pivot.current === 0) {
                sortedElements.current.push(pivot.current);
            }
            else if (low.current > high.current) {
                var toInsert = array[pivot.current];
                array.splice(pivot.current, 1);
                array.splice(low.current, 0, toInsert);
                sortedElements.current.push(low.current);
                //worklist.current = worklist.current.map((value, index) => {
                //    if (value > low.current) return value + 1;
                //    else return;
                //})

                if (low.current !== 0) {
                    //find low partition
                    let temp = sortedElements.current.filter(n => n < low.current);
                    
                    if (temp.length === 0) {


                        
                        worklist.current.push(0);
                        worklist.current.push(low.current - 1);
                    }
                    else {
                        if (Math.max(...temp) !== low.current - 1) {
                            worklist.current.push(Math.max(...temp) + 1);
                            worklist.current.push(low.current - 1);
                        }
                    }
                }
                //find high bound
                if (low.current !== array.length - 1) {
                    let temp = sortedElements.current.filter(n => n > low.current);
                    if (temp.length === 0) {
                        worklist.current.push(low.current + 1);
                        worklist.current.push(array.length - 1);
                    }
                    else {
                        if (Math.min(...temp) !== low.current + 1) {
                            worklist.current.push(low.current + 1);
                            worklist.current.push(Math.min(...temp) - 1);
                        }
                    }

                    
                }

                low.current = -1;
                pivot.current = -1;
                high.current = -1;

            }
            else if (array[low.current] > array[pivot.current]) {
                if (array[high.current] < array[pivot.current]) {
                    swap(array, low.current, high.current);
                }
                else high.current--;
            }
            else low.current++;
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

    const genWorstCase = () => {
        if (sorting.current) {
            toggleSorting();
        }
        var size = parseInt(arraySizeInput.current.value);
        if (isNaN(size))
            size = randInt(5, 50);
        if (size > 0) {
            setArray(buildSorted(size));
            setSorted(false);

            pivot.current = -1;
            low.current = -1;
            high.current = -1;
            sortedElements.current = [];

        }

        arraySizeInput.current.value = null;
        
    }

    //sets state array to a random array for sorting
    const generateArray = () => {
        if (sorting.current) {
            toggleSorting();
        }
        var size = parseInt(arraySizeInput.current.value);
        if (isNaN(size))
            size = randInt(5, 50);
        if (size > 0) {
            setArray(randomArray(size));
            setSorted(false);

            pivot.current = -1;
            low.current = -1;
            high.current = -1;
            sortedElements.current = [];
            
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
        setArray(randomArray(randInt(5, 50)));
    }, [randomArray]);

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
        <div className="quick-sort">
            <div id="main">
                <div className="controls">
                    <button id="randomButton" ref={generateArrayButton} onClick={generateArray}>Random</button>
                    <span className="labeledInput">
                        <label>Array Size</label>
                        <input id="arraySizeInput" ref={arraySizeInput} type="text"></input>
                    </span>
                    <br />
                    <button id="worstButton" onClick={genWorstCase}>Worst-case</button>
                    <br />
                    <button id="toggleSortingButton" className="greenButton" ref={toggleSortingButton} onClick={toggleSorting}>Sort</button>
                    <br />
                    <span className="labeledSlider">
                        <label>Animation Speed</label>
                        <input className="slider" ref={speedSlider} onChange={updateSpeed} min="0" max="990" type="range"></input>
                    </span>
                </div>
                <div className="visualization">
                    <QuickSortDisplay array={array} low={low} high={high} pivot={pivot} sortedElements={sortedElements} />
                </div>
                
            </div>
            <div className="legend">
                <Element color="green"></Element>
                <p>= Sorted</p>
                < br />
                <Element></Element>
                <p>= Unsorted</p>
                <br />
                <Element color="pink" border="bordered"></Element>
                <p>= Current Low</p>
                <br />
                <Element color="green" border="bordered"></Element>
                <p>= Current High</p>
                <br />
                <Element color="purple" ></Element>
                <p>= Pivot</p>
            </div>
        </div>
        );
}




export default QuickSort;
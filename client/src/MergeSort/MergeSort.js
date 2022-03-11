import React, { useState, useRef, useEffect, useCallback } from 'react';
import './MergeSort.scss';
import Element from '../Element/Element';

//react component to display merge sort arrays
const MergeSortDisplay = (props) => {
    var componentList = [];
    for (let i = 0; i < props.mergedArrays.length; i++) {
        var array1 = props.arrays[2*i];
        var array2 = [];
        if (2*i+1 < props.arrays.length)
            array2 = props.arrays[2*i+1];
        componentList.push(<MergeSortDisplayRow key={componentList.length} array1={array1} array2={array2} mergedArray={props.mergedArrays[i]} />);
        componentList.push(<hr key={componentList.length} />);
    }
    componentList.pop();
    return componentList;
}

//react component to display a merge sort row consisting of 2 arrays, and the array it is merging into
const MergeSortDisplayRow = (props) => {
    return (
        <div className="merge-sort-display-row">
            <div>
                <MergeSortDisplayRowHelper1 array1={props.array1} array2={props.array2} />
            </div>
            <div>
                <MergeSortDisplayRowHelper2 array={props.mergedArray} />
            </div>
        </div>
    );
}
const MergeSortDisplayRowHelper1 = (props) => {
    var componentList = [];
    for (let i = 0; i < props.array1.length; i++) {
        if (i === props.array1.length-1)
            componentList.push(<Element key={componentList.length} value={props.array1[i]} border="bordered" />);
        else
            componentList.push(<Element key={componentList.length} value={props.array1[i]} />);
    }
    if (props.array1.length === 0)
        componentList.push(<Element key={componentList.length} color="none" />);
    componentList.push(<br key={componentList.length} />);
    for (let i = 0; i < props.array2.length; i++) {
        if (i === props.array2.length-1)
            componentList.push(<Element key={componentList.length} value={props.array2[i]} border="bordered" />);
        else
            componentList.push(<Element key={componentList.length} value={props.array2[i]} />);
    }
    if (props.array2.length === 0)
        componentList.push(<Element key={componentList.length} color="none" />);
    return componentList;
}
const MergeSortDisplayRowHelper2 = (props) => {
    var componentList = [];
    componentList.push(<p className="arrow" key={0}>&#x2192;</p>);
    for (let i = 0; i < props.array.length; i++)
        if (props.array[i] !== null)
            componentList.push(<Element key={componentList.length} color="green" value={props.array[i]} />);
    return componentList;
}

//react component for merge sort
const MergeSort = () => {

    const [, forceRender] = useState(0);
    const arrays = useRef([[]]);
    const mergedArrays = useRef([[]]);
    const mergedArraysCurrs = useRef([]);
    const mergeRowIndex = useRef(0);
    const [sorted, setSorted] = useState(false);
    const sorting = useRef(false);
    const interval = useRef(null);
    const arraySizeInput = useRef();
    const toggleSortingButton = useRef();
    const speedSlider = useRef();

    //We call update on fake state variable to force rerender
	const forceUpdate = () => {
		forceRender(renders => renders+1);
	}

    //sets state array to a random array for sorting
    const generateArrays = () => {
        if (sorting.current) {
            toggleSorting();
        }
        var size = parseInt(arraySizeInput.current.value);
        if(isNaN(size))
            size = randInt(5,20);
        if (size > 0) {
            arrays.current = randomArrays(size);
            initializeMergedArrays();
            forceUpdate();
            setSorted(false);
        }
        arraySizeInput.current.value = null;
    }
    //generates a random array within reasonable bounds
    const randomArrays = useCallback((size) => {
        var newArrays = new Array(size);
            for (let i = 0; i < size; i++) {
                newArrays[i] = [randInt(-999, 1000)];
            }
        return newArrays;
    }, []);
    const randInt = (min, max) => {
        return Math.floor(Math.random() * (max-min) + min);
    }

    //initialize the arrays randomly
    useEffect(() => {
        arrays.current = randomArrays(randInt(5,20));
        initializeMergedArrays();
        forceUpdate();
    }, [randomArrays]);

    //function to initialize list of empty arrays to be merged into
    const initializeMergedArrays = () => {
        mergedArrays.current = [];
        mergedArraysCurrs.current = [];
        mergeRowIndex.current = 0;
        const length = Math.ceil(arrays.current.length/2);
        for (let i = 0; i < length; i++) {
            mergedArrays.current.push([]);
            if (2*i+1 < arrays.current.length) {
                for (let j = 0; j < arrays.current[2*i].length+arrays.current[2*i+1].length; j++)
                    mergedArrays.current[i].push(null);
                mergedArraysCurrs.current.push(arrays.current[2*i].length+arrays.current[2*i+1].length-1);
            } else {
                for (let j = 0; j < arrays.current[2*i].length; j++)
                    mergedArrays.current[i].push(null);
                mergedArraysCurrs.current.push(arrays.current[2*i].length-1);
            }
        }
    }

    //function to do a single step of merge sorting
    const sortingStep = () => {
        //get the two arrays we are currently merging
        var array1 = arrays.current[2 * mergeRowIndex.current];
        var array2 = [];
        if (2 * mergeRowIndex.current + 1 < arrays.current.length)
            array2 = arrays.current[2 * mergeRowIndex.current + 1];
        //if both arrays are empty increase the current mergeRowIndex
        if (array1.length === 0 && array2.length === 0)
            mergeRowIndex.current++;
            //if done with merging all rows then move mergedArrays into main arrays
            if (mergeRowIndex.current > mergedArrays.current.length-1) {
                if (mergedArrays.current.length === 1) {
                    setSorted(true);
                    clearInterval(interval.current);
                    sorting.current = false;
                    toggleSortingButton.current.innerHTML = "Sort";
                    toggleSortingButton.current.classList.remove("pinkButton");
                    toggleSortingButton.current.classList.add("greenButton");
                    return;
                }
                arrays.current = mergedArrays.current;
                initializeMergedArrays();
                return;
            }
            //get the two arrays we are currently merging
            array1 = arrays.current[2 * mergeRowIndex.current];
            array2 = [];
            if (2 * mergeRowIndex.current + 1 < arrays.current.length)
                array2 = arrays.current[2 * mergeRowIndex.current + 1];
            //if either array is empty concatenate the other to the merged array
            if (array1.length === 0) {
                for (let i = array2.length-1; i >= 0; i--) {
                    mergedArrays.current[mergeRowIndex.current][mergedArraysCurrs.current[mergeRowIndex.current]] = array2[i];
                    mergedArraysCurrs.current[mergeRowIndex.current]--;
                }
                arrays.current[2*mergeRowIndex.current+1] = [];
            } else if (array2.length === 0) {
                for (let i = array1.length-1; i >= 0; i--) {
                    mergedArrays.current[mergeRowIndex.current][mergedArraysCurrs.current[mergeRowIndex.current]] = array1[i];
                    mergedArraysCurrs.current[mergeRowIndex.current]--;
                }
                arrays.current[2*mergeRowIndex.current] = [];
            //add the max of the last elements to the merged array
            } else {
                if (array1[array1.length-1] >= array2[array2.length-1]) {
                    mergedArrays.current[mergeRowIndex.current][mergedArraysCurrs.current[mergeRowIndex.current]] = array1[array1.length-1];
                    mergedArraysCurrs.current[mergeRowIndex.current]--;
                    arrays.current[2*mergeRowIndex.current].pop();
                } else {
                    mergedArrays.current[mergeRowIndex.current][mergedArraysCurrs.current[mergeRowIndex.current]] = array2[array2.length-1];
                    mergedArraysCurrs.current[mergeRowIndex.current]--;
                    arrays.current[2*mergeRowIndex.current+1].pop();
                }
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
            }, 1000-speedSlider.current.value);
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
            }, 1000-speedSlider.current.value);
        }
    }

    return (
        <div className="merge-sort">
            <div className="controls">
                <button id="randomButton" onClick={generateArrays}>Random</button>
                <span className="labeledInput">
                    <label>Array Size</label>
                    <input id="arraySizeInput" ref={arraySizeInput} type="text"></input>
                </span>
                <br />
                <button ref={toggleSortingButton} className="greenButton" onClick={toggleSorting}>Sort</button>
                <br />
                <span className="labeledSlider">
                    <label>Animation Speed</label>
                    <input className="slider" ref={speedSlider} onChange={updateSpeed} min="0" max="990" type="range"></input>
                </span>
            </div>
            <div className="visualization">
                <MergeSortDisplay arrays={arrays.current} mergedArrays={mergedArrays.current} />
            </div>
        </div>
    );
}

export default MergeSort;
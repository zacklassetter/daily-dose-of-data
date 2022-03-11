import React, { useState, useRef, useEffect, useCallback } from 'react';
import './HeapSort.scss';
import Element from '../Element/Element.js';
import { BinaryHeapClass } from '../BinaryHeap/BinaryHeap.js';
import BinaryTreeDisplay from '../BinaryTree/BinaryTreeDisplay.js';

//react component to dislplay an aray
const ArrayDisplay = (props) => {
    return props.array.map((value, index) => {
        return <Element key={index} value={value} />
    });
}
const SortedArrayDisplay = (props) => {
    return props.array.map((value, index) => {
        return <Element key={index} value={value} color="green" />
    });
}

//main react component for heap sort animation
const HeapSort = () => {

    const [, forceRender] = useState(0);
    const [heap, setHeap] = useState(new BinaryHeapClass());
    const [array, setArray] = useState([]);
    const [sortedArray, setSortedArray] = useState([]);
    const [sorted, setSorted] = useState(false);
    const arraySizeInput = useRef();
    const toggleSortingButton = useRef();
    const speedSlider = useRef();
    const sorting = useRef(false);
    const interval = useRef(null);

    //We call update on fake state variable to force rerender
	const forceUpdate = () => {
		forceRender(renders => renders+1);
	}

    //sets state array to a random array for sorting
    const generateArray = () => {
        if (sorting.current) {
            toggleSorting();
        }
        var size = parseInt(arraySizeInput.current.value);
        if(isNaN(size))
            size = randInt(5,32);
        if (size > 0) {
            setArray(randomArray(size));
            setHeap(new BinaryHeapClass());
            setSortedArray([]);
            setSorted(false);
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
        setArray(randomArray(randInt(5,32)));
    }, [randomArray]);

    //function to do a single step of sorting animation
    const sortingStep = () => {
        if(array.length === 0 && heap.heap.length === 0) {
            setSorted(true);
            toggleSorting();
        } else if(array.length !== 0)
            heap.insert(array.pop())
        else
            sortedArray.push(heap.remove());
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
        <div className="heap-sort">
            <div className="controls">
                <button id="randomButton" onClick={generateArray}>Random</button>
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
                <div className="array">
                    <ArrayDisplay array={array} />
                </div>
                <BinaryTreeDisplay tree={heap.getTree()} />
                <div className="array">
                    <SortedArrayDisplay array={sortedArray} />
                </div>
            </div>
        </div>
    );

}

export default HeapSort;
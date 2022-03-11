import React, { useState, useRef, useEffect } from 'react';
import './Array.scss';
import Element from '../Element/Element';

const ArrayDisplay = (props) => {
    return props.array.map((value, index) => {
        return (
            <div key={index} className="labeledElement">
                <label>{index}</label>
                <Element value={value}></Element>
            </div>
        );
    });
}

const Array = () => {
    const [array, setArray] = useState([]);
    const [, forceRender] = useState(0);
    const randomSize = useRef();
    const arraySize = useRef();
    const setIndex = useRef();
    const setValue = useRef();
    const deleteIndex = useRef();
    const arrayOutput = useRef();
    const getIndex = useRef();

    const forceUpdate = () => {
        forceRender(renders => renders + 1);
    }

    //sets array to a randomly generated array
    const randomArray = () => {
        var size = randomSize.current.value;
        if (size === "") {
            size = randInt(10, 60);
        }
        if (!isNaN(parseInt(size)) && size > 0) {
            var newArray = [];
            for (let i = 0; i < size; i++)
                newArray.push(randInt(-999,1000));
            setArray(newArray);
        }
        randomSize.current.value = null;
    }
    const randInt = (min, max) => {
        return Math.floor(Math.random() * (max-min) + min);
    }

    //initialize list to random list
    useEffect(randomArray, []);

    const build = () => {
        var newArray = [];
            var size = parseInt(arraySize.current.value);
            if(isNaN(size))
                size = randInt(10, 60);
            while (size > 0) {
                newArray.push(null);
                size--;
        }
        setArray(newArray);
        arraySize.current.value = null;
    }

    const set = () => {
        const index = parseInt(setIndex.current.value);
        const value = parseInt(setValue.current.value);
        if (!isNaN(index) && !isNaN(value) && index >= 0 && index < array.length) {
            array[index] = value;
            forceUpdate();
        } else {
            arrayOutput.current.value = "Invalid";
        }
        setIndex.current.value = null;
        setValue.current.value = null;
    }

    const remove = () => {
        const index = parseInt(deleteIndex.current.value);
        if (!isNaN(index) && index >= 0 && index < array.length) {
            const data = array[index];
            arrayOutput.current.value = data;
            if (array[index] == null) {
                arrayOutput.current.value = "Invalid";
            }
            array[index] = null;
            
            forceUpdate();
            
        }
        
        else {
            arrayOutput.current.value = "Invalid";
        }
        deleteIndex.current.value = null;
    }

    const get = () => {
        const index = parseInt(getIndex.current.value);
        if (!isNaN(index) && index >= 0 && index < array.length) {
            const data = array[index];
            arrayOutput.current.value = data;
            if (array[index] == null) {
                arrayOutput.current.value = "null";
            }
        } else {
            arrayOutput.current.value = "Invalid";
        }
        getIndex.current.value = null;
    }


    return (
        <div className="array">
            <div className="controls">
                <button id="randomButton" onClick={randomArray}>Random</button>
                <span className="labeledInput">
                    <label>Size</label>
                    <input id="randomSizeInput" ref={randomSize} type="text"></input>
                </span>
                <br />
                <button id="buildButton" onClick={build}>Build</button>
                <span className="labeledInput">
                    <label>Size</label>
                    <input type="text" ref={arraySize}></input>
                </span>
                <br />
                <button id="setButton" onClick={set}>Set</button>
                <span className="labeledInput">
                    <label>Index</label>
                    <input id="setIndex" type="text" ref={setIndex}></input>
                </span>
                <span className="labeledInput">
                    <label>Value</label>
                    <input id="setValue" type="text" ref={setValue}></input>
                </span>
                <br />
                <button id="deleteButton" onClick={remove}>Delete</button>
                <span className="labeledInput">
                    <label>Index</label>
                    <input type="text" ref={deleteIndex}></input>
                </span>
                <br />
                <button id="getButton" onClick={get}>Get</button>
                <span className="labeledInput">
                    <label>Index</label>
                    <input type="text" ref={getIndex}></input>
                </span>
                
                <br />
                <input id="arrayOutput" type="text" ref={arrayOutput} readOnly></input>
                <br />
                
            </div>
            <div className="visualization">
                <ArrayDisplay array={array} />
            </div>
        </div>
    );
}

export default Array;
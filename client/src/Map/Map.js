import React, { useState, useRef, useEffect } from 'react';
import './Map.scss';
import Element from '../Element/Element';

//react component to display a map
const MapDisplay = (props) => {
    var componentList = [];
    props.map.forEach((value, key) => {
        componentList.push(
            <div key={componentList.length} className="map-pair">
                <Element value={key} />
                <br />
                <p className="map-arrow">&#x2193;</p>
                <br />
                <Element value={value} color="green" />
            </div>
        );
    });
    return componentList;
}

//react component for map visualization
const MyMap = () => {

    const [, forceRender] = useState(0);
    const [map, setMap] = useState(new Map());
    const insertKey = useRef();
    const insertValue = useRef();
    const removeKey = useRef();
    const getKey = useRef();
    const getOutput = useRef();

    //We call update on fake state variable to force rerender
	const forceUpdate = () => {
		forceRender(renders => renders+1);
	}

    //function to create a random map
    const randomMap = () => {
        const size = randInt(5, 40);
        const newMap = new Map();
        for (let i = 0; i < size; i++)
            newMap.set(randInt(-999,1000), randInt(-999,1000));
        setMap(newMap);
    }
    const randInt = (min, max) => {
        return Math.floor(Math.random() * (max-min) + min);
    }

    //function to create an empty map
    const emptyMap = () => {
        setMap(new Map());
    }

    //initialize to a random map
    useEffect(randomMap, []);

    //function to insert into map
    const insert = () => {
        var key = parseInt(insertKey.current.value);
        if (isNaN(key))
            key = randInt(-999,1000);
        var value = parseInt(insertValue.current.value);
        if (isNaN(value))
            value = randInt(-999,1000);
        map.set(key, value);
        forceUpdate();
        insertKey.current.value = null;
        insertValue.current.value = null;
    }

    //function to remove from map
    const remove = () => {
        var key = parseInt(removeKey.current.value);
        if (!isNaN(key))
            map.delete(key);
        forceUpdate();
        removeKey.current.value = null;
    }

    //function to get a value for a key in a map
    const get = () => {
        var key = parseInt(getKey.current.value);
        if (!isNaN(key))
            getOutput.current.value = map.get(key);
        forceUpdate();
        getKey.current.value = null;
    }

    return (
        <div className="map">
            <div className="controls">
                <button id="randomButton" onClick={randomMap}>Random</button>
                <br />
                <button id="emptyButton" onClick={emptyMap}>Empty</button>
                <br />
                <button id="insertButton" onClick={insert}>Insert</button>
                <span className="labeledInput">
                    <label>Key</label>
                    <input id="insertKey" ref={insertKey} type="text"></input>
                </span>
                <span className="labeledInput">
                    <label>Value</label>
                    <input id="insertValue" ref={insertValue} type="text"></input>
                </span>
                <br />
                <button id="removeButton" onClick={remove}>Remove</button>
                <span className="labeledInput">
                    <label>Key</label>
                    <input id="removeKey" ref={removeKey} type="text"></input>
                </span>
                <br />
                <button id="getButton" onClick={get}>Get</button>
                <span className="labeledInput">
                    <label>Key</label>
                    <input id="getKey" ref={getKey} type="text"></input>
                </span>
                <br />
                <input id="getOutput" ref={getOutput} type="text" readonly></input>
            </div>
            <div className="visualization">
                <MapDisplay map={map} />
            </div>
        </div>
    )

}

export default MyMap;
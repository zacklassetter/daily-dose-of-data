import React, { useState, useRef, useEffect } from 'react';
import './List.scss';
import Element from '../Element/Element';

const ListDisplay = (props) => {
    return props.list.map((value, index) => {
        return (
            <div key={index} className="labeledElement">
                <label>{index}</label>
                <Element value={value}></Element>
            </div>
        );
    });
}

//main react component for list
const List = () => {

    const [, forceRender] = useState(0);
    const [list, setList] = useState([]);
    const randomSize = useRef();
    const insertIndex = useRef();
    const insertValue = useRef();
    const removeIndex = useRef();
    const listOutput = useRef();
    const getIndex = useRef();

    //We call update on fake state variable to force rerender
	const forceUpdate = () => {
		forceRender(renders => renders+1);
	}

    //sets list to a randomly generated list
    const randomList = () => {
        var size = randomSize.current.value;
        if (size === "") {
            size = randInt(10, 60);
        }
        if (!isNaN(parseInt(size)) && size > 0) {
            var newList = [];
            for (let i = 0; i < size; i++)
                newList.push(randInt(-999,1000));
            setList(newList);
        }
        randomSize.current.value = null;
    }
    const randInt = (min, max) => {
        return Math.floor(Math.random() * (max-min) + min);
    }

    //initialize list to random list
    useEffect(randomList, []);

    const insert = () => {
        var index = parseInt(insertIndex.current.value);
        var value = parseInt(insertValue.current.value);
        if(isNaN(index))
            index = 0;
        if(isNaN(value))
            value = 0;
        if (index >= 0 && index <= list.length) {
            list.splice(index, 0, value);
            forceUpdate();
        } else {
            listOutput.current.value = "Invalid";
        }
        insertIndex.current.value = null;
        insertValue.current.value = null;
    }

    const remove = () => {
        var index = parseInt(removeIndex.current.value);
        if(isNaN(index))
            index = 0;
        if (index >= 0 && index < list.length) {
            const data = list.splice(index, 1);
            forceUpdate();
            listOutput.current.value = data;
        } else {
            listOutput.current.value = "Invalid";
        }
        removeIndex.current.value = null;
    }

    const get = () => {
        var index = parseInt(getIndex.current.value);
        if(isNaN(index))
            index = 0;
        if (index >= 0 && index < list.length) {
            const data = list[index];
            listOutput.current.value = data;
        } else {
            listOutput.current.value = "Invalid";
        }
        getIndex.current.value = null;
    }

    return (
        <div className="list">
            <div className="controls">
                <button id="randomButton" onClick={randomList}>Random</button>
                <span className="labeledInput">
                    <label>Size</label>
                    <input id="randomSizeInput" ref={randomSize} type="text"></input>
                </span>
                <br />
                <button id="insertButton" onClick={insert}>Insert</button>
                <span className="labeledInput">
                    <label>Index</label>
                    <input id="insertIndex" ref={insertIndex} type="text"></input>
                </span>
                <span className="labeledInput">
                    <label>Value</label>
                    <input id="insertValue" ref={insertValue} type="text"></input>
                </span>
                <br />
                <button id="removeButton" onClick={remove}>Remove</button>
                <span className="labeledInput">
                    <label>Index</label>
                    <input id="removeIndex" ref={removeIndex} type="text"></input>
                </span>
                <br />
                <input id="listOutput" type="text" ref={listOutput} readOnly></input>
                <br />
                <button id="getButton" onClick={get}>Get</button>
                <span className="labeledInput">
                    <label>Index</label>
                    <input id="getIndex" ref={getIndex} type="text"></input>
                </span>
            </div>
            <div className="visualization">
                <ListDisplay list={list} />
            </div>
        </div>
    );
}

export default List;
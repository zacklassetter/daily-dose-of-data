import React, { useState, useRef, useEffect } from 'react';
import './Set.scss';
import Element from '../Element/Element';

//react component to display a set
const SetDisplay = (props) => {
    var componentList = [];
    componentList.push(<p className="curly-brace" key={-1}>&#123;</p>);
    componentList = componentList.concat([...props.set].map((value, index) => {
        return <Element key={index} value={value}></Element>;
    }));
    componentList.push(<p className="curly-brace" key={componentList.length}>&#125;</p>);
    return componentList;
}

//react component for set visualization
const MySet = () => {

    const [, forceRender] = useState(0);
    const [set, setSet] = useState(new Set());
    const insertInput = useRef();
    const removeInput = useRef();
    const findInput = useRef();
    const findOutput = useRef();

    //We call update on fake state variable to force rerender
	const forceUpdate = () => {
		forceRender(renders => renders+1);
	}

    //function to create a random set
    const randomSet = () => {
        const size = randInt(20, 100);
        const newSet = new Set();
        for (let i = 0; i < size; i++)
            newSet.add(randInt(-999,1000));
        setSet(newSet);
    }
    const randInt = (min, max) => {
        return Math.floor(Math.random() * (max-min) + min);
    }

    //function to create an empty set
    const emptySet = () => {
        setSet(new Set());
    }

    //initialize to a random set
    useEffect(randomSet, []);

    //function to insert into set
    const insert = () => {
        var data = parseInt(insertInput.current.value);
        if (isNaN(data))
            data = randInt(-999,1000);
        set.add(data);
        forceUpdate();
        insertInput.current.value = null;
    }

    //function to remove from set
    const remove = () => {
        var data = parseInt(removeInput.current.value);
        if (!isNaN(data))
            set.delete(data);
        forceUpdate();
        removeInput.current.value = null;
    }

    //function to find a value in the set
    const find = () => {
        var data = parseInt(findInput.current.value);
        if (!isNaN(data)) {
            if (set.has(data))
                findOutput.current.value = data + " is in set"
            else
                findOutput.current.value = data + " not in set"
        }
        forceUpdate();
        findInput.current.value = null;
    }

    return (
        <div className="set">
            <div className="controls">
                <button id="randomButton" onClick={randomSet}>Random</button>
                <br />
                <button id="emptyButton" onClick={emptySet}>Empty</button>
                <br />
                <button id="insertButton" onClick={insert}>Insert</button>
                <input id="insertInput" ref={insertInput} type="text"></input>
                <br />
                <button id="removeButton" onClick={remove}>Remove</button>
                <input id="removeInput" ref={removeInput} type="text"></input>
                <br />
                <button id="findButton" onClick={find}>Find</button>
                <input id="findInput" ref={findInput} type="text"></input>
                <br />
                <input id="findOutput" ref={findOutput} type="text" readOnly></input>
            </div>
            <div className="visualization">
                <SetDisplay set={set} />
            </div>
        </div>
    )

}

export default MySet;
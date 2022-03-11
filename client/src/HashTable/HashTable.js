import React, { useState, useRef, useEffect } from 'react';
import './HashTable.scss';
import Element from '../Element/Element';

//class for a hash table with linear probing
class HashTableClass {
    constructor (size, loadFactor) {
        this.array = [];
        for (let i = 0; i < size; i++)
            this.array.push(null);
        this.elements = 0;
        this.size = size;
        this.LOADFACTOR = loadFactor;
    }

    //hash function to return normal modulus results with + or - numbers (value % size)
    hash (value) {
        return ((value % this.size)+this.size)%this.size;
    }

    resize () {
        let oldArray = this.array;
        this.array = [];
        this.elements = 0;
        for (let i = 0; i < 2*this.size; i++)
            this.array.push(null);
        this.size = 2*this.size;
        for (let i = 0; i < oldArray.length; i++)
            if (oldArray[i] !== null)
                this.insert(oldArray[i]);
    }

    insert (value) {
        if ((this.elements+1)/this.size > this.LOADFACTOR)
            this.resize();
        let hashCode = this.hash(value);
        while (this.array[hashCode] !== null) {
            hashCode++;
            if (hashCode === this.array.length)
                hashCode = 0;
        }
        this.array[hashCode] = value;
        this.elements++;
        return hashCode;
    }

    remove (value) {
        let hashCode = this.hash(value);
        while (this.array[hashCode] !== value) {
            hashCode++;
            if (hashCode === this.array.length)
                hashCode = 0;
            if (this.array[hashCode] === null)
                return null;
        }
        this.array[hashCode] = null;
        this.elements--;
        return hashCode;
    }

    find (value) {
        let hashCode = this.hash(value);
        while (this.array[hashCode] !== value) {
            hashCode++;
            if (hashCode === this.array.length)
                hashCode = 0;
            if (this.array[hashCode] === null)
                return null;
        }
        return hashCode;
    }
}

//react component to display a hashtable
const HashTableDisplay = (props) => {
    return props.hashTable.array.map((value, index) => {
        if (index === props.green) {
            return (
                <div key={index} className="labeledElement">
                    <label>{index}</label>
                    <Element value={value} color="green"></Element>
                </div>
            );
        } else if (index === props.pink) {
            return (
                <div key={index} className="labeledElement">
                    <label>{index}</label>
                    <Element value={value} color="pink"></Element>
                </div>
            );
        } else if (index === props.yellow) {
            return (
                <div key={index} className="labeledElement">
                    <label>{index}</label>
                    <Element value={value} color="yellow"></Element>
                </div>
            );
        } else {
            return (
                <div key={index} className="labeledElement">
                    <label>{index}</label>
                    <Element value={value}></Element>
                </div>
            );
        }
    });
}

//react component for hash table visualization
const HashTable = () => {

    const [, forceRender] = useState(0);
    const [hashTable, setHashTable] = useState(new HashTableClass(10, 0.5));
    const randomSize = useRef();
    const randomLF = useRef();
    const buildSize = useRef();
    const buildLF = useRef();
    const insertInput = useRef();
    const removeInput = useRef();
    const findInput = useRef();
    const lastInserted = useRef();
    const lastRemoved = useRef();
    const lastFound = useRef();

    //We call update on fake state variable to force rerender
	const forceUpdate = () => {
		forceRender(renders => renders+1);
	}

    //function to create a random hashTable
    const randomHashTable = () => {
        lastInserted.current = null;
        lastRemoved.current = null;
        lastFound.current = null;
        var size = parseInt(randomSize.current.value);
        randomSize.current.value = null;
        if (isNaN(size) || size < 1)
            size = randInt(20, 100);
        var loadFactor = parseFloat(randomLF.current.value);
        randomLF.current.value = null;
        if(isNaN(loadFactor) || loadFactor > 1.0 || loadFactor <= 0.0)
            loadFactor = Math.random() * 0.5 + 0.25;
        const newHashTable = new HashTableClass(size, loadFactor);
        for (let i = 0; i < (size*loadFactor-1)*(Math.random()*0.75+0.25); i++)
            newHashTable.insert(randInt(-999,1000));
        setHashTable(newHashTable);
    }
    const randInt = (min, max) => {
        return Math.floor(Math.random() * (max-min) + min);
    }

    //initialize to a random hash table
    useEffect(randomHashTable, []);

    //function to build an empty hash table
    const build = () => {
        lastInserted.current = null;
        lastRemoved.current = null;
        lastFound.current = null;
        var size = parseInt(buildSize.current.value);
        buildSize.current.value = null;
        if (isNaN(size) || size < 1)
            size = randInt(20, 100);
        var loadFactor = parseFloat(buildLF.current.value);
        buildLF.current.value = null;
        if(isNaN(loadFactor) || loadFactor > 1.0 || loadFactor <= 0.0)
            loadFactor = Math.random() * 0.5 + 0.25;
        setHashTable(new HashTableClass(size, loadFactor));
    }

    //function to insert into hash table
    const insert = () => {
        lastInserted.current = null;
        lastRemoved.current = null;
        lastFound.current = null;
        var data = parseInt(insertInput.current.value);
        if (isNaN(data))
            data = randInt(-999,1000);
        lastInserted.current = hashTable.insert(data);
        forceUpdate();
        insertInput.current.value = null;
    }

    //function to remove from hash table
    const remove = () => {
        lastInserted.current = null;
        lastRemoved.current = null;
        lastFound.current = null;
        var data = parseInt(removeInput.current.value);
        if (!isNaN(data))
            lastRemoved.current = hashTable.remove(data);
        forceUpdate();
        removeInput.current.value = null;
    }

    //function to find a value in the hash table
    const find = () => {
        lastInserted.current = null;
        lastRemoved.current = null;
        lastFound.current = null;
        var data = parseInt(findInput.current.value);
        if (!isNaN(data))
            lastFound.current = hashTable.find(data);
        forceUpdate();
        findInput.current.value = null;
    }

    return (
        <div className="hash-table">
            <div id="main">
                <div className="controls">
                    <button id="randomButton" onClick={randomHashTable}>Rand</button>
                    <span className="labeledInput">
                        <label>Size</label>
                        <input id="randomSizeInput" ref={randomSize} type="text"></input>
                    </span>
                    <span className="labeledInput">
                        <label>Load Factor</label>
                        <input id="randomLFInput" ref={randomLF} type="text"></input>
                    </span>
                    <br />
                    <button id="buildButton" onClick={build}>Build</button>
                    <span className="labeledInput">
                        <label>Size</label>
                        <input id="buildSizeInput" ref={buildSize} type="text"></input>
                    </span>
                    <span className="labeledInput">
                        <label>Load Factor</label>
                        <input id="buildLFInput" ref={buildLF} type="text"></input>
                    </span>
                    <br />
                    <button id="insertButton" onClick={insert}>Insert</button>
                    <input id="insertInput" ref={insertInput} type="text"></input>
                    <br />
                    <button id="removeButton" onClick={remove}>Remove</button>
                    <input id="removeInput" ref={removeInput} type="text"></input>
                    <br />
                    <button id="findButton" onClick={find}>Find</button>
                    <input id="findInput" ref={findInput} type="text"></input>
                </div>
                <div className="visualization">
                    <HashTableDisplay hashTable={hashTable} green={lastInserted.current} pink={lastRemoved.current} yellow={lastFound.current} />
                    <p>Current Load Factor: {(hashTable.elements / hashTable.size).toFixed(2)} / {(hashTable.LOADFACTOR).toFixed(2)}</p>
                </div>
            </div>
            <div className="legend">
                <Element color="green"></Element>
                <p>= Last Inserted</p>
                < br />
                <Element color="pink"></Element>
                <p>= Last Removed</p>
                <br />
                <Element color="yellow"></Element>
                <p>= Last Found</p>
            </div>
        </div>
    )

}

export default HashTable;
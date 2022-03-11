import React, { useState, useRef, useEffect, useCallback } from 'react';
import './LinkedList.scss';
import Element from '../Element/Element';

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedListClass {
    constructor(head = null) {
        this.head = head;
        this.size = 0;
    }

    //for insertion at tail -- currently unused
    insert(data) {
        if (this.head == null) {
            this.head = new Node(data);
        }
        else {
            var current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = new Node(data);
        }
        this.size++;
    }

    insertAt(data, index) {
        var newNode = new Node(data);
        var current = this.head;
        var previous;

        if (index <= this.size) {

            if (index === 0) {
                newNode.next = this.head;
                this.head = newNode;
            }
            else {
                var i = 0;
                while (i < index) {
                    i++;
                    previous = current;
                    current = current.next;
                }
                newNode.next = current;
                previous.next = newNode;
            }
            this.size++;
        }
    }

    get(index) {
        var i = 0;
        var current = this.head;
        while (i !== index) {
            current = current.next;
            i++;
        }
        return current.value;
    }

    remove(index) {
        var i = 0;
        var curr, prev, next;
        if (index < this.size && this.size > 0) {
            if (index === 0) {
                this.head = this.head.next;
                this.size--;
            }
            else {
                i++;
                prev = this.head;
                curr = prev.next;
                next = curr.next;
                while (i !== index) {
                    i++;
                    prev = prev.next;
                    curr = curr.next;
                    next = next.next;
                }
                prev.next = next;
                this.size--;
            }
        }
    }
}

const LinkedListDisplay = (props) => {
    var current = props.list.head;
    var index = 0;
    var componentList = [];
    while (current != null) {
        if (current === props.focus) {
            componentList.push(
                <div key={2*index} className="labeledElement">
                    <label>{index}</label>
                    <Element value={current.value} border="bordered"></Element>
                </div>
            );
        } else if (current === props.green) {
            componentList.push(
                <div key={2*index} className="labeledElement">
                    <label>{index}</label>
                    <Element value={current.value} color="green"></Element>
                </div>
            );
        } else if (current === props.yellow) {
            componentList.push(
                <div key={2*index} className="labeledElement">
                    <label>{index}</label>
                    <Element value={current.value} color="yellow"></Element>
                </div>
            );
        } else if (current === props.pink) {
            componentList.push(
                <div key={2*index} className="labeledElement">
                    <label>{index}</label>
                    <Element value={current.value} color="pink"></Element>
                </div>
            );
        } else {
            componentList.push(
                <div key={2*index} className="labeledElement">
                    <label>{index}</label>
                    <Element value={current.value}></Element>
                </div>
            );
        }
        componentList.push(
            <p className="arrow" key={2*index+1}>&#x2192;</p>
        );
        current = current.next;
        index++;
    }
    componentList.push(<Element key={2*index} value="null" />);
    return componentList;

    
}

const LinkedList = () => {

    const [list, setList] = useState(new LinkedListClass());
    const [, forceRender] = useState(0);
    const randomSize = useRef();
    const insertIndex = useRef();
    const insertValue = useRef();
    const removeIndex = useRef();
    const listOutput = useRef();
    const getIndex = useRef();
    const speedSlider = useRef();
    const interval = useRef();
    const animationFunction = useRef();
    const animationValue = useRef();
    const targetIndex = useRef();
    const animating = useRef();
    const currentNode = useRef();
    const currentIndex = useRef();
    const green = useRef();
    const yellow = useRef(null);
    const pink = useRef(null);

    //We call update on fake state variable to force rerender
    const forceUpdate = () => {
        forceRender(renders => renders + 1);
    }

    //sets list to a randomly generated list
    const randomList = () => {
        if (animating.current)
            toggleAnimation();
        var size = randomSize.current.value;
        if (size === "") {
            size = randInt(8, 40);
        }
        if (!isNaN(parseInt(size)) && size > 0) {
            var newList = new LinkedListClass();
            for (let i = 0; i < size; i++)
                newList.insertAt(randInt(-999,1000), 0);
            setList(newList);
        }
        randomSize.current.value = null;
    }
    const randInt = (min, max) => {
        return Math.floor(Math.random() * (max-min) + min);
    }

    //function to pause or continue animation
    const toggleAnimation = useCallback(() => {
        if (animating.current) {
            clearInterval(interval.current);
            animating.current = false;
            animationFunction.current = null;
            animationValue.current = null;
            targetIndex.current = null;
            currentNode.current = null;
            currentIndex.current = null;
            pink.current = null;
        } else {
            interval.current = setInterval(() => {
                animationFunction.current();
                forceUpdate();
            }, 1000-speedSlider.current.value);
            animating.current = true;
            green.current = null;
            yellow.current = null;
        }
    }, []);

    //initialize list to random list
    useEffect(randomList, [toggleAnimation]);

    //insertion only occurs at head for now
    function insert() {
        if (animating.current)
            toggleAnimation();
        var data = parseInt(insertValue.current.value);
        var index = parseInt(insertIndex.current.value);
        if(isNaN(data))
            data = randInt(-999,1000);
        if(isNaN(index))
            index = 0;
        if (index === 0) {
            list.insertAt(data, 0);
            green.current = list.head;
            yellow.current = null;
            forceUpdate();
        } else if (index > 0 && index < list.size) {
            animationFunction.current = insertStep;
            animationValue.current = data;
            targetIndex.current = index;
            currentNode.current = list.head;
            currentIndex.current = 0;
            forceUpdate();
            toggleAnimation();
        } else {
            listOutput.current.value = "Invalid";
        }
        insertValue.current.value = null;
        insertIndex.current.value = null;
    }

    //function for a single step of insertion animation
    const insertStep = () => {
        if(currentIndex.current === targetIndex.current-1) {
            list.insertAt(animationValue.current, targetIndex.current);
            green.current = currentNode.current.next;
            toggleAnimation();
        } else {
            currentNode.current = currentNode.current.next;
            currentIndex.current++;
        }
    }

    function get() {
        if (animating.current)
            toggleAnimation();
        var index = parseInt(getIndex.current.value);
        if(isNaN(index))
            index = 0;
        if (index >= 0 && index < list.size) {
            animationFunction.current = getStep;
            targetIndex.current = index;
            currentIndex.current = 0;
            currentNode.current = list.head;
            forceUpdate();
            toggleAnimation();
        } else {
            listOutput.current.value = "Invalid";
        }
        getIndex.current.value = null;
    }

    //function for a single step of get animation
    const getStep = () => {
        if (targetIndex.current === currentIndex.current) {
            if (yellow.current === null) {
                yellow.current = currentNode.current;
                currentNode.current = null;
            } else {
                listOutput.current.value = list.get(targetIndex.current);
                toggleAnimation();
            }
        } else {
            currentNode.current = currentNode.current.next;
            currentIndex.current++;
        }
    }

    function remove() {
        if (animating.current)
            toggleAnimation();
        var index = parseInt(removeIndex.current.value);
        if(isNaN(index))
            index = 0;
        if (index >= 0 && index < list.size) {
            animationFunction.current = removeStep;
            targetIndex.current = index;
            currentIndex.current = 0;
            currentNode.current = list.head;
            forceUpdate();
            toggleAnimation();
        } else {
            listOutput.current.value = "Invalid";
        }
        removeIndex.current.value = null;
    }

    //function to do 1 step of remove animation
    const removeStep = () => {
        if (targetIndex.current === currentIndex.current) {
            if (pink.current === null) {
                pink.current = currentNode.current;
                currentNode.current = null;
            } else {
                listOutput.current.value = list.get(targetIndex.current);
                list.remove(targetIndex.current);
                toggleAnimation();
            }
        } else {
            currentNode.current = currentNode.current.next;
            currentIndex.current++;
        }
    }

    //changes the animation speed when the slider changes
    const updateSpeed = () => {
        if (animationFunction.current != null) {
            clearInterval(interval.current);
            interval.current = setInterval(() => {
                animationFunction.current();
                forceUpdate();
            }, 1000-speedSlider.current.value);
        }
    }

    return (
        <div className="linked-list">
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
                <button onClick={remove} id="removeButton" >Remove</button>
                <span className="labeledInput">
                    <label>Index</label>
                    <input id="removeIndex" ref={removeIndex} type="text"></input>
                </span>
                <br />
                <input id="listOutput" type="text" ref={listOutput} readOnly></input>
                <br />
                <button id="getButton" onClick={get} >Get</button>
                <span className="labeledInput">
                    <label>Index</label>
                    <input id="getIndex" ref={getIndex} type="text"></input>
                </span>
                <br />
                <span className="labeledSlider">
                    <label>Animation Speed</label>
                    <input className="slider" ref={speedSlider} onChange={updateSpeed} min="0" max="990" type="range"></input>
                </span>
            </div>

            <div className="visualization">
                <LinkedListDisplay list={list} focus={currentNode.current} green={green.current} yellow={yellow.current} pink={pink.current} />
            </div>
        </div>
    );

}

export default LinkedList;
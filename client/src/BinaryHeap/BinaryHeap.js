import React, { useState, useRef, useEffect, useCallback } from 'react';
import './BinaryHeap.scss';
import BinaryTreeDisplay from '../BinaryTree/BinaryTreeDisplay.js';
import { BinaryTreeNode, BinaryTreeClass } from '../BinaryTree/BinaryTree.js';

//class for binary heap data structure
export class BinaryHeapClass {
    constructor() {
        this.heap = [];
        this.focus = null;
        this.focusNode = null;
        this.green = null;
        this.greenNode = null;
        this.pink = null;
        this.pinkNode = null;
    }

    insert(value) {
        this.heap.push(value);
        var current = this.heap.length-1;
        var parent = Math.floor((current-1)/2);
        while(parent >= 0) {
            if (this.heap[current] < this.heap[parent]) {
                let temp = this.heap[parent];
                this.heap[parent] = this.heap[current];
                this.heap[current] = temp;
                current = parent;
                parent = Math.floor((current-1)/2);
            } else
                break;
        }
    }

    remove() {
        if (this.heap.length !== 0) {
            var returnValue = this.heap[0];
            if (this.heap.length === 1)
                this.heap = [];
            else {
                this.heap[0] = this.heap.pop();
                var current = 0;
                while (current < this.heap.length) {
                    if (2 * current + 2 < this.heap.length) {
                        if (this.heap[current] <= this.heap[2 * current + 1] && this.heap[current] <= this.heap[2 * current + 2]) {
                            break;
                        } else if (this.heap[2 * current + 1] < this.heap[2 * current + 2]) {
                            let temp = this.heap[current];
                            this.heap[current] = this.heap[2 * current + 1];
                            this.heap[2 * current + 1] = temp;
                            current = 2 * current + 1;
                        } else {
                            let temp = this.heap[current];
                            this.heap[current] = this.heap[2 * current + 2];
                            this.heap[2 * current + 2] = temp;
                            current = 2 * current + 2;
                        }
                    } else if (2 * current + 1 < this.heap.length) {
                        if (this.heap[current] > this.heap[2 * current + 1]) {
                            let temp = this.heap[current];
                            this.heap[current] = this.heap[2 * current + 1];
                            this.heap[2 * current + 1] = temp;
                            current = 2 * current + 1;
                        } else {
                            break;
                        }
                    } else {
                        break;
                    }
                }
            }
            return returnValue;
        }
    }

    getTree() {
        var tree = new BinaryTreeClass(null);
        this.focusNode = null;
        this.greenNode = null;
        this.pinkNode = null;
        if (this.heap.length !== 0) {
            tree.root = new BinaryTreeNode(this.heap[0]);
            if (this.focus === 0)
                this.focusNode = tree.root;
            if (this.green === 0)
                this.greenNode = tree.root;
            if (this.pink === 0)
                this.pinkNode = tree.root;
            var nodes = [tree.root];
            var newNodes = [];
            var indices = [0];
            var newIndices = [];
            while (nodes.length !== 0) {
                for (let i = 0; i < nodes.length; i++) {
                    if (2*indices[i]+1 < this.heap.length) {
                        nodes[i].left = new BinaryTreeNode(this.heap[2*indices[i]+1]);
                        if (2*indices[i]+1 === this.focus)
                            this.focusNode = nodes[i].left;
                        if (2*indices[i]+1 === this.green)
                            this.greenNode = nodes[i].left;
                        if (2*indices[i]+1 === this.pink)
                            this.pinkNode = nodes[i].left;
                        newNodes.push(nodes[i].left);
                        newIndices.push(2*indices[i]+1);
                    }
                    if (2*indices[i]+2 < this.heap.length) {
                        nodes[i].right = new BinaryTreeNode(this.heap[2*indices[i]+2]);
                        if (2*indices[i]+2 === this.focus)
                            this.focusNode = nodes[i].right;
                        if (2*indices[i]+2 === this.green)
                            this.greenNode = nodes[i].right;
                        if (2*indices[i]+2 === this.pink)
                            this.pinkNode = nodes[i].right;
                        newNodes.push(nodes[i].right);
                        newIndices.push(2*indices[i]+2);
                    }
                }
                nodes = newNodes;
                newNodes = [];
                indices = newIndices;
                newIndices = [];
            }
        }
        return tree;
    }
}

//main react component for binary heap visualization
const BinaryHeap = () => {

    const [, forceRender] = useState(0);
    const [heap, setHeap] = useState(new BinaryHeapClass());
    const insertInput = useRef();
    const speedSlider = useRef();
    const interval = useRef();
    const animating = useRef();
    const animationFunction = useRef();
    const animationCurrent = useRef();

    //We call update on fake state variable to force rerender
	const forceUpdate = () => {
		forceRender(renders => renders+1);
	}

    //function to create a random heap
    const randomHeap = () => {
        if (animating.current)
            toggleAnimation();
        const elements = randInt(2,32);
        var newHeap = new BinaryHeapClass();
        for (let i = 0; i < elements; i++)
            newHeap.insert(randInt(-999,1000));
        setHeap(newHeap);
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
            animationCurrent.current = null;
        } else {
            interval.current = setInterval(() => {
                animationFunction.current();
                forceUpdate();
            }, 1000-speedSlider.current.value);
            animating.current = true;
        }
    }, []);

    //initialize the tree to a random binary heap
    useEffect(randomHeap, [toggleAnimation]);

    //function to insert a value into the heap
    const insert = () => {
        if (!animating.current) {
            var data = parseInt(insertInput.current.value);
            if (isNaN(data))
                data = randInt(-999, 1000);
            insertInput.current.value = null;
            heap.heap.push(data);
            heap.pink = null;
            heap.green = heap.heap.length - 1;
            forceUpdate();
            animationFunction.current = insertStep;
            animationCurrent.current = heap.heap.length - 1;
            toggleAnimation();
        }
    }

    //function to do a single step of insertion animation
    const insertStep = () => {
        var parent = Math.floor((animationCurrent.current-1)/2);
        if (parent < 0)
            toggleAnimation();
        else {
            if (heap.heap[parent] > heap.heap[animationCurrent.current]) {
                let temp = heap.heap[parent];
                heap.heap[parent] = heap.heap[animationCurrent.current];
                heap.heap[animationCurrent.current] = temp;
                animationCurrent.current = parent;
                heap.green = animationCurrent.current;
            } else
                toggleAnimation();
        }
    }

    //function to remove a value from the heap
    const remove = () => {
        if (!animating.current && heap.heap.length > 0) {
            if (heap.heap.length === 1) {
                heap.remove();
                forceUpdate();
            } else {
                heap.green = null;
                heap.pink = 0;
                heap.focus = heap.heap.length-1;
                forceUpdate();
                animationFunction.current = removeStep;
                animationCurrent.current = 0;
                toggleAnimation();
            }
        }
    }

    //function to one step of remove animation
    const removeStep = () => {
        if (heap.focus !== null) {
            heap.heap[0] = heap.heap.pop();
            heap.focus = null;
        } else {
            if (2 * animationCurrent.current + 2 < heap.heap.length) {
                if (heap.heap[animationCurrent.current] <= heap.heap[2 * animationCurrent.current + 1] && heap.heap[animationCurrent.current] <= heap.heap[2 * animationCurrent.current + 2]) {
                    toggleAnimation();
                } else if (heap.heap[2 * animationCurrent.current + 1] < heap.heap[2 * animationCurrent.current + 2]) {
                    let temp = heap.heap[animationCurrent.current];
                    heap.heap[animationCurrent.current] = heap.heap[2 * animationCurrent.current + 1];
                    heap.heap[2 * animationCurrent.current + 1] = temp;
                    animationCurrent.current = 2 * animationCurrent.current + 1;
                    heap.pink = animationCurrent.current;
                } else {
                    let temp = heap.heap[animationCurrent.current];
                    heap.heap[animationCurrent.current] = heap.heap[2 * animationCurrent.current + 2];
                    heap.heap[2 * animationCurrent.current + 2] = temp;
                    animationCurrent.current = 2 * animationCurrent.current + 2;
                    heap.pink = animationCurrent.current;
                }
            } else if (2 * animationCurrent.current + 1 < heap.heap.length) {
                if (heap.heap[animationCurrent.current] > heap.heap[2 * animationCurrent.current + 1]) {
                    let temp = heap.heap[animationCurrent.current];
                    heap.heap[animationCurrent.current] = heap.heap[2 * animationCurrent.current + 1];
                    heap.heap[2 * animationCurrent.current + 1] = temp;
                    animationCurrent.current = 2 * animationCurrent.current + 1;
                    heap.pink = animationCurrent.current;
                } else {
                    toggleAnimation();
                }
            } else {
                toggleAnimation();
            }
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
        <div className="binary-heap">
            <div className="controls">
                <button id="randomButton" onClick={randomHeap}>Random</button>
                <br />
                <button id="insertButton" onClick={insert}>Insert</button>
                <input ref={insertInput} type="text"></input>
                <br />
                <button id="removeButton" onClick={remove}>Remove</button>
                <br />
                <span className="labeledSlider">
                    <label>Animation Speed</label>
                    <input className="slider" ref={speedSlider} onChange={updateSpeed} min="0" max="990" type="range"></input>
                </span>
            </div>
            <div className="visualization">
                <BinaryTreeDisplay tree={heap.getTree()} border={heap.focusNode} green={heap.greenNode} pink={heap.pinkNode} />
            </div>
        </div>
    );
}

export default BinaryHeap;
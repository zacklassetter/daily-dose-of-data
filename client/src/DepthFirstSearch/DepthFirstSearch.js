import React, { useState, useRef, useEffect } from 'react';
import './DepthFirstSearch.scss';
import { BinaryTreeNode, BinaryTreeClass } from '../BinaryTree/BinaryTree.js';
import BinaryTreeDisplay from '../BinaryTree/BinaryTreeDisplay';
import Element from '../Element/Element';

const DepthFirstSearch = () => {

    const [, forceRender] = useState(0);
    const [tree, setTree] = useState(new BinaryTreeClass(null));
    const nodeQueue = useRef([]);
    const index = useRef();
    const searchInput = useRef();
    const speedSlider = useRef();
    const searching = useRef();
    const searchValue = useRef(null);
    const current = useRef(null);
    const interval = useRef();
    const green = useRef();
    const pink = useRef();

    //We call update on fake state variable to force rerender
	const forceUpdate = () => {
		forceRender(renders => renders+1);
	}

    //function to generate random tree
    const randomTree = () => {
        var newNodeChance = 0.9;
        const levels = randInt(1,5);
        var newTree = new BinaryTreeClass(new BinaryTreeNode(randInt(-999,1000)));
        var nodes = [newTree.root];
        var newNodes = [];
        for (let level = 0; level < levels; level++) {
            for (let i = 0; i < nodes.length; i++) {
                if (Math.random() < Math.pow(newNodeChance, level)) {
                    nodes[i].left = new BinaryTreeNode(randInt(-999,1000));
                    newNodes.push(nodes[i].left);
                }
                if (Math.random() < Math.pow(newNodeChance, level)) {
                    nodes[i].right = new BinaryTreeNode(randInt(-999,1000));
                    newNodes.push(nodes[i].right);
                }
            }
            nodes = newNodes;
            newNodes = [];
        }
        setTree(newTree);
    }
    const randInt = (min, max) => {
        return Math.floor(Math.random() * (max-min) + min);
    }

    //initialize tree to a random tree
    useEffect(randomTree, []);

    //function to add nodes to queue in DFS order
    const dfs = (node) => {
        if (node !== null) {
            nodeQueue.current.push(node);
            dfs(node.left);
            dfs(node.right);
        }

    }

    //function to start searching animation
    const search = () => {
        if (searching.current)
            toggleAnimation();
        var data = parseInt(searchInput.current.value);
        if (isNaN(data))
            data = 0;
        searchInput.current.value = null;
        nodeQueue.current = [];
        dfs(tree.root);
        current.current = nodeQueue.current[0];
        index.current = 0;
        searchValue.current = data;
        toggleAnimation();
        forceUpdate();
    }

    //function to 1 step of searching animation
    const searchingStep = () => {
        if (current.current.value === searchValue.current) {
            green.current = current.current;
            current.current = null;
            toggleAnimation();
        } else if (index.current === nodeQueue.current.length-1) {
            pink.current = current.current;
            current.current = null;
            toggleAnimation();
        } else {
            index.current++;
            current.current = nodeQueue.current[index.current];
        }
    }

    //function to turn searching on and off by button click
    const toggleAnimation = () => {
        if (searching.current) {
            clearInterval(interval.current);
            searching.current = false;
        } else {
            interval.current = setInterval(() => {
                searchingStep();
                forceUpdate();
            }, 1000-speedSlider.current.value);
            searching.current = true;
            green.current = null;
            pink.current = null;
        }
    }

    //changes the animation speed of searching when the slider changes
    const updateSpeed = () => {
        if (searching.current) {
            clearInterval(interval.current);
            interval.current = setInterval(() => {
                searchingStep();
                forceUpdate();
            }, 1000-speedSlider.current.value);
        }
    }

    return (
        <div className="depth-first-search">
            <div id="main">
                <div className="controls">
                    <button id="randomButton" onClick={randomTree}>Random</button>
                    <br />
                    <button id="searchButton" onClick={search}>Search</button>
                    <input id="searchInput" ref={searchInput} type="text"></input>
                    <br />
                    <span className="labeledSlider">
                        <label>Animation Speed</label>
                        <input className="slider" ref={speedSlider} onChange={updateSpeed} min="0" max="990" type="range"></input>
                    </span>
                </div>
                <div className="visualization">
                    <BinaryTreeDisplay tree={tree} border={current.current} green={green.current} pink={pink.current} />
                </div>
            </div>
            <div className="legend">
                <Element color="green"></Element>
                <p>= Element Found</p>
                < br />
                <Element color="pink"></Element>
                <p>= Element Not Found</p>
                <br />
                <Element border="bordered"></Element>
                <p>= Current Focus</p>
            </div>
        </div>
    );

}

export default DepthFirstSearch;
import React, { useState, useEffect } from 'react';
import './BinaryTree.scss';
import BinaryTreeDisplay from './BinaryTreeDisplay.js';

//class for node in binary tree
export class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

//class for binary tree data structure
export class BinaryTreeClass {
    constructor(root) {
        this.root = root;
    }
}

//main react component for binary tree
const BinaryTree = () => {

    const [tree, setTree] = useState(null);
    
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

    return (
        <div className="binary-tree">
            <div className="controls">
                <button id="randomButton" onClick={randomTree}>Random</button>
            </div>
            <div className="visualization">
                <BinaryTreeDisplay tree={tree} />
            </div>
        </div>
    );

}

export default BinaryTree;
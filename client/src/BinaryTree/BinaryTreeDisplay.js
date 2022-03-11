import React from 'react';
import './BinaryTreeDisplay.scss';
import Element from '../Element/Element';


//react component for a single level in a binary tree
const BinaryTreeLevel = (props) => {
    return props.list.map((node, index) => {
        if (node === null)
            return <Element key={index} value={""} color={"none"} />;
        else if (node === props.green)
            return <Element key={index} value={node.value} color="green" />;
        else if (node === props.pink)
            return <Element key={index} value={node.value} color="pink" />;
        else if (node === props.yellow)
            return <Element key={index} value={node.value} color="yellow" />;
        else if (node === props.border)
            return <Element key={index} value={node.value} border="bordered" />;
        else
            return <Element key={index} value={node.value} />;
    });
}

//react component for lines between binary tree nodes
const BinaryTreeLineLevel = (props) => {
    var lines = [];
    for (let i = 0; i < props.list.length; i++) {
        if (props.list[i] === null)
            lines.push(<div key={lines.length} className="binary-tree-line-none"></div>);
        else if (i % 2 === 0)
            lines.push(<div key={lines.length} className="binary-tree-line-left"></div>);
        else
            lines.push(<div key={lines.length} className="binary-tree-line-right"></div>);
        
    }
    return lines;
}

//react component to display the tree
const BinaryTreeDisplay = (props) => {
    var levelComponents = [];
    var nextQueue = [];
    if (props.tree !== null)
        nextQueue.push(props.tree.root);
    var currQueue = [];
    while (true) {
        //continue breadth-first traversal creating BinaryTreeLevel component every iteration
        currQueue = nextQueue;
        nextQueue = [];
        for (let i = 0; i < currQueue.length; i++) {
            //use null as placeholder empty nodes in a level
            if (currQueue[i] === null) {
                nextQueue.push(null);
                nextQueue.push(null);
            } else {
                nextQueue.push(currQueue[i].left);
                nextQueue.push(currQueue[i].right);
            }
        }
        //add a level of nodes
        levelComponents.push(
            <div key={levelComponents.length} className="binary-tree-level">
                <BinaryTreeLevel list={currQueue} border={props.border} green={props.green} pink={props.pink} yellow={props.yellow} />
            </div>
        );
        //break loop if entire level is null
        var allNull = true;
        for (let i = 0; i < nextQueue.length; i++) {
            if (nextQueue[i] !== null) {
                allNull = false;
            }
        }
        if (allNull) {
            break;
        }
        //add a level of lines to the next level
        levelComponents.push(
            <div key={levelComponents.length} className="binary-tree-line-level">
                <BinaryTreeLineLevel list={nextQueue} />
            </div>
        );
    }
    return levelComponents;
}

export default BinaryTreeDisplay;
import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';
import NavigationSection from './NavigationSection';

const Navigation = () => {

    return (
        <div className="navigation">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><NavigationSection title={"Data Structures"} list={["Array", "List", "Array List", "Linked List", "Stack", "Queue", "Binary Tree", "Binary Search Tree", "AVL Tree", "Binary Heap", "Hash Table", "Set", "Map"]} /></li>
                <li><NavigationSection title={"Algorithms"} list={["Insertion Sort", "Selection Sort", "Bubble Sort", "Merge Sort", "Quick Sort", "Heap Sort", "Linear Search", "Binary Search", "Depth First Search", "Breadth First Search"]} /></li>
                <li><Link to="/about">About Us</Link></li>
            </ul>
        </div>
    );
    
}

export default Navigation
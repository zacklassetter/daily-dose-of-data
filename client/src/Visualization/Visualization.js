import React from 'react';
import Array from '../Array/Array';
import List from '../List/List';
import ArrayList from '../ArrayList/ArrayList';
import LinkedList from '../LinkedList/LinkedList';
import Stack from '../Stack/Stack';
import Queue from '../Queue/Queue';
import BinaryTree from '../BinaryTree/BinaryTree';
import BinarySearchTree from '../BinarySearchTree/BinarySearchTree';
import AvlTree from '../AvlTree/AvlTree';
import BinaryHeap from '../BinaryHeap/BinaryHeap';
import HashTable from '../HashTable/HashTable';
import Set from '../Set/Set';
import Map from '../Map/Map';
import InsertionSort from '../InsertionSort/InsertionSort';
import SelectionSort from '../SelectionSort/SelectionSort';
import BubbleSort from '../BubbleSort/BubbleSort';
import MergeSort from '../MergeSort/MergeSort';
import QuickSort from '../QuickSort/QuickSort';
import HeapSort from '../HeapSort/HeapSort';
import LinearSearch from '../LinearSearch/LinearSearch';
import BinarySearch from '../BinarySearch/BinarySearch';
import DepthFirstSearch from '../DepthFirstSearch/DepthFirstSearch';
import BreadthFirstSearch from '../BreadthFirstSearch/BreadthFirstSearch';

const Visualization = (props) => {
	if (props.visualization === "Array")
		return <Array />;
	if (props.visualization === "List")
		return <List />;
	if (props.visualization === "Array List")
		return <ArrayList />;
	if (props.visualization === "Linked List")
		return <LinkedList />;
	if (props.visualization === "Stack")
		return <Stack />;
	if (props.visualization === "Queue")
		return <Queue />;
	if (props.visualization === "Binary Tree")
		return <BinaryTree />;
	if (props.visualization === "Binary Search Tree")
		return <BinarySearchTree />;
	if (props.visualization === "AVL Tree")
		return <AvlTree />;
	if (props.visualization === "Binary Heap")
		return <BinaryHeap />;
	if (props.visualization === "Hash Table")
		return <HashTable />;
	if (props.visualization === "Set")
		return <Set />;
	if (props.visualization === "Map")
		return <Map />;
	if (props.visualization === "Insertion Sort")
		return <InsertionSort />;
	if (props.visualization === "Selection Sort")
		return <SelectionSort />;
	if (props.visualization === "Bubble Sort")
		return <BubbleSort />;
	if (props.visualization === "Merge Sort")
		return <MergeSort />;
	if (props.visualization === "Quick Sort")
		return <QuickSort />;
	if (props.visualization === "Heap Sort")
		return <HeapSort />;
	if (props.visualization === "Linear Search")
		return <LinearSearch />;
	if (props.visualization === "Binary Search")
		return <BinarySearch />;
	if (props.visualization === "Depth First Search")
		return <DepthFirstSearch />;
	if (props.visualization === "Breadth First Search")
		return <BreadthFirstSearch />;
	return null;
}

export default Visualization;
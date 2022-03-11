import React from 'react';

const HeapSortInformation = () => {
    return (
        <div className="information">
            <p>Heap Sort is an algorithm to sort an array which adds all of the elements to a Binary Heap, and then repeatedly removes elements from the heap until it is empty. The elements are removed from the heap in a sorted order, and are added to a new sorted array in the order that they are removed.</p>
            <br />
            <p>In order to sort the elements in our array from least to greatest, the heap we use must be a Min Heap. This way the element at the root of the tree is guaranteed to be the smallest value in the heap. We repeatedly remove from the root to get the smallest remaining value in the tree. Once the heap is empty, all of the original elements have been removed in a sorted order.</p>
            <br />
            <p>Insertion and removal into a Binary Heap both have a time complexity of O(log n). Because every element in the array must be both inserted and removed from the heap, the overall time complexity of Heap Sort is n*O(log n) + n*O(log n), which is O(n log n). The space required to store all of the values in a Binary Heap will be linear with regards to the number of elements in the original array. However, it is possible to convert the original array into a Binary Heap in place, and vice versa. Thus, the space complexity of Heap Sort can be constant.</p>
            <br />
            <table>
                <tbody>
                    <tr><th>Heap Sort</th><th>Complexity</th></tr>
                    <tr><td>Time Complexity</td><td>O(n log n)</td></tr>
                    <tr><td>Space Complexity</td><td>O(1)</td></tr>
                </tbody>
            </table>
        </div>
    );
}

export default HeapSortInformation;
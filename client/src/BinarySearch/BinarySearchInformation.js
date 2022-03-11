import React from 'react';

const BinarySearchInformation = () => {
    return (
        <div className="information">
            <p>Binary Search is an algorithm to search for a value in an array or any other linear data structure. Binary Search is only possible if the array is already in a sorted order. The search starts at the midpoint of the array, and compares it with the target value. If it is less than the target value, the search continues only in the right half of the array. If it is greater than the target value, the search continues only in the left half of the array. If it is equal, the search ends and we have found our target value. The number of elements we are searching is cut in half with every comparison this way. Once we are down to a single element and it is not equal to our target then our search is over.</p>
            <br />
            <p>Binary Search relies on the fact that the array is already sorted beforehand. Because of this it is able to eliminate half of the entries remaining with every comparison, because all values after a certain value are greater than or equal to that value, and all values before a certain value are less than or equal to that value.</p>
            <br />
            <p>Because the number of elements we are looking at gets cut in half with every comparison, the total number of comparisons needed to complete Binary Search in an array of length n will be maximum log n. Thus the time complexity of Binary Search is O(log n). The only extra memory we need for Binary Search is two pointers representing the start and end of the section of the array we are still considering. Therefore the space complexity of Binary Search is constant.</p>
            <br />
            <table>
                <tbody>
                    <tr><th>Binary Search</th><th>Complexity</th></tr>
                    <tr><td>Time Complexity</td><td>O(log n)</td></tr>
                    <tr><td>Space Complexity</td><td>O(1)</td></tr>
                </tbody>
            </table>
        </div>
    );
}

export default BinarySearchInformation;
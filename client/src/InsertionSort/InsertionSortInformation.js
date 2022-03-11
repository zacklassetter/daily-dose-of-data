import React from 'react';

const InsertionSortInformation = () => {
    return (
        <div className="information">
            <p>Insertion sort is an algorithm used to sort an array by partitioning an array into two subarrays: sorted and unsorted. It then builds the sorted subarray one element at a time until the unsorted subarray is depleted.</p>
            <br />
            <p>The algorithm repeatedly designates a value from the unsorted subarray as the current value to be inserted. It then iterates through the sorted array, comparing each element to the one to be inserted. Once the sorted position of the element to be inserted is determined, it is moved from the unsorted subarray into its proper sorted position in the sorted subarray. This process of designating the element to be inserted, finding its sorted position, and inserting it repeats until the unsorted subarray has been completely depleted and the whole starting list has been sorted.</p>
            <br />
            <p>Although the algorithm does become signicantly less efficient when used on large data sets, it is quite effiecient for sorting lists that are already mostly sorted. This, in conjunction with the ease of implementation, makes it an ideal sorting algorithm for many situtions. For example, a large sorted list which is constantly being added to.</p>
            <br />
            <table>
                <tbody>
                    <tr><th>Insertion Sort</th><th>Complexity</th></tr>
                    <tr><td>Time Complexity</td><td>O(n<sup>2</sup>)</td></tr>
                    <tr><td>Space Complexity</td><td>O(1)</td></tr>
                </tbody>
            </table>
        </div>
    );
}

export default InsertionSortInformation;
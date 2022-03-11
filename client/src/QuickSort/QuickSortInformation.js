import React from 'react';

const QuickSortInformation = () => {
    return (
        <div className="information">
            <p>Quick sort is a divide-and-conquer algorithm to sort an array. It involves first selecting a pivot and then swapping elements and moving the pivot such that all elements to the left of the pivot are less than the pivot and all elements to the right of the pivot are greater. The greater and less than values are then partitioned into two subarrays and the process is repeated recursiveley.</p>
            <br />
            <p>The choice of the pivot is open to some variation. In this visualization we chose to use the last element in each partition as the pivot. Thus, a single partition is processed by first designating the last element in the partition as the pivot. Next, a low pointer is placed on the lower bound index of the partition and a high pointer is placed on the higher bound index of the parition. The low pointer then moves rightward until and element is found that is greater than the pivot element. The high pointer follows suit by moving leftward until it finds an element that is less than the pivot element. When both the low and high pointers find their target they perform a swap. The pointers then both move again, repeating the process, until they cross. Crossed pointers indicate the sorted location of the pivot element. Thus, the pivot is moved to that location and the array is partitioned into a lower and upper subarray. The entire procedure is then repeated recursively until all elements are sorted.</p>
            <br />
            <p>Quick sort has a worst-case time complexity of O(n<sup>2</sup>). This occurs when partitions are repeatedly the most unbalanced they can be, meaning that after every partitioning process one of the new paritions is of size n-1 elements. In our visualization this would occur when the array is already sorted prior to the use of our algorithm. In the best-case, all partitions created of nearly equal sizes, and the time-complexity is O(n log n). The average case is also O(n log n).</p>
            <br />
            <table>
                <tbody>
                    <tr><th>Quick Sort</th><th>Complexity</th></tr>
                    <tr><td>Average-case Time Complexity</td><td>O(n log n)</td></tr>
                    <tr><td>Worst-case Time Complexity</td><td>O(n<sup>2</sup>)</td></tr>
                    <tr><td>Space Complexity</td><td>O(n)</td></tr>
                </tbody>
            </table>
        </div>
    );
}

export default QuickSortInformation;
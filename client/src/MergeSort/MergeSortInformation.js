import React from 'react';

const MergeSortInformation = () => {
    return (
        <div className="information">
            <p>Merge Sort is a divide and conquer algorithm for sorting an array. First the array is split up into several sub-arrays of size 1. Then every pair of arrays is merged in such a way that the new merged array contains the elements of the two previous arrays in sorted order. This is repeated until all arrays have been merged into one final sorted array.</p>
            <br />
            <p>Another way to think of Merge Sort is as a recursive algorithm. First the array is split into two parts, then both parts are recursively sorted, and finally the two parts are merged back together in a sorted order. The base case of this recursion would be a sub-array of size 1, which is already sorted.</p>
            <br />
            <p>The way that two sorted sub-arrays can be merged into one sorted array is fairly simple. We just repeatedly take the larger of the two elements at the ends of both arrays, and add that to our new merged array. This continues until one sub-array is empty, and then we just concatenate the remaining values at the beginning of our new array. This works because the maximum value of the two values at the ends of the sub-arrays is guaranteed to be the largest value remaining in all of the two sub-arrays.</p>
            <br />
            <p>To understand the complexity of Merge Sort, consider the complexity of a single level of the algorithm, and how many levels there will be. A single level of Merge Sort consists of merging k pairs of sub-arrays with a total size n/k. Merging a pair of sub-arrays with a total size of n/k takes linear time with a worst case of n/k-1 comparisons. Doing this k times gives a single level of Merge Sort a complexity of k*O(n/k) which is just O(n). The number of levels of Merge Sort is equal to the number of times we can split our sub-arrays into two parts. This will be O(log n). So with O(log n) levels and O(n) time on each level, the overall time complexity of Merge Sort is O(n log n). The space required for Merge Sort is just memory for the new arrays that are being merged into which will be O(n) in total.</p>
            <br />
            <table>
                <tbody>
                    <tr><th>Merge Sort</th><th>Complexity</th></tr>
                    <tr><td>Time Complexity</td><td>O(n log n)</td></tr>
                    <tr><td>Space Complexity</td><td>O(n)</td></tr>
                </tbody>
            </table>
        </div>
    );
}

export default MergeSortInformation;
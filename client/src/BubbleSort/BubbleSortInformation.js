import React from 'react';

const BubbleSortInformation = () => {
    return (
        <div className="information">
            <p>Bubble sort is an algorithm used to sort an array by repeatedly iterating through each adjacent pair of elements in a list, comparing each element to its adjacent partner, and then either swapping or not swapping the elements such that they end up in the correct order. Upon reaching the end of the list, the algorithm repeats this process, starting over at the first element of the array. This process is repeated until each adjacent pair is observed to be in the correct order and no swaps take place for an entire pass.</p>
            <br />
            <p>The visualization below shows an optimized version of Bubble sort. This version involves recognizing that after n passes over the array, the nth element in the array is in the sorted position. Thus, the algorithm need not pass over the final n-1 elements after n passes. This reduces the total number of necessary comparisons, however makes no change to the number of swaps (since swaps only occur on elements which are in the incorrect position).</p>
            <br />
            <p>In both versions of Bubble sort, the maximum number of passes needed to sort an an array with n elements will be O(n). Since each pass will also take on average O(n) time, the overall time complexity of Bubble sort is O(n<sup>2</sup>). No extra space is needed for Bubble sort.</p>
            <br />
            <table>
                <tbody>
                    <tr><th>Bubble Sort</th><th>Complexity</th></tr>
                    <tr><td>Time Complexity</td><td>O(n<sup>2</sup>)</td></tr>
                    <tr><td>Space Complexity</td><td>O(1)</td></tr>
                </tbody>
            </table>
        </div>
    );
}

export default BubbleSortInformation;
import React from 'react';

const LinearSearchInformation = () => {
    return (
        <div className="information">
            <p>Linear Search is an algorithm to search for a value in an array or any other linear data structure. It takes the straightforward approach of starting at the beginning of the array, and searching every element one by one from the beginning to the end. If it finds the target value or reaches the end of the array, the search is over.</p>
            <br />
            <p>In the worst-case, Linear Search must compare the target value with every value in the array. Thus, an array with n elements will have a time complexity of O(n) for Linear Search. The space complexity of linear search is constant because no extra space is required.</p>
            <br />
            <table>
                <tbody>
                    <tr><th>Linear Search</th><th>Complexity</th></tr>
                    <tr><td>Time Complexity</td><td>O(n)</td></tr>
                    <tr><td>Space Complexity</td><td>O(1)</td></tr>
                </tbody>
            </table>
        </div>
    );
}

export default LinearSearchInformation;
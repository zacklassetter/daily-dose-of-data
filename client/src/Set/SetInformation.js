import React from 'react';

const SetInformation = () => {
    return (
        <div className="information">
            <p>A set is an Abstract Data Type (ADT) representing an unordered collection of data with no repeat elements. The data is stored in no particular order, and there can only be one of any given value in the set. Elements are either in or not in the set. There is no concept of order or quantities in a set. Thus sets are most useful for problems in which membership in the set is the most important property.</p>
            <br />
            <p><u>A Set has the following basic operations:</u></p>
            <ul>
                <li><b>Insert:</b> attempts to add an element to the set</li>
                <li><b>Remove:</b> attempts to remove an element from the set</li>
                <li><b>Find:</b> checks if an element is in the set</li>
            </ul>
            <br />
            <p>The Set ADT is typically implemented using a Hash Table. With the hash table implementation, the key used for any value in the set is the same as its value. Because a Hash Table has constant time complexities for insertion, removal, and finding operations, a set has the same complexities for these operations.</p>
            <br />
            <table>
                <tbody>
                    <tr><th>Operation</th><th>Worst-Case</th><th>Average-Case</th></tr>
                    <tr><td>Insert</td><td>O(n)</td><td>O(1)</td></tr>
                    <tr><td>Remove</td><td>O(n)</td><td>O(1)</td></tr>
                    <tr><td>Find</td><td>O(n)</td><td>O(1)</td></tr>
                </tbody>
            </table>
        </div>
    );
}

export default SetInformation;
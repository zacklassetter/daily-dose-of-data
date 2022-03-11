import React from 'react';

const HashTableInformation = () => {
    return (
        <div className="information">
            <p>A Hash Table is a data structure that places values in an array at an index based on a hash code computed from the key using a hash function. In this visualization, the key and the value are the same integer value. An array is defined for the Hash Table with a fixed size. Once the array reaches a certain capacity of elements, a new larger array is created and all of the previous elements are inserted back into the new array. The maximum capacity of the array before it must be resized is called the load factor, and is typically a fixed percentage.</p>
            <br />
            <p><u>A Hash Table has the following basic operations:</u></p>
            <ul>
                <li><b>Build:</b> initializes a hash table with a given size and load factor</li>
                <li><b>Insert:</b> inserts a value into the hash table with a certain key</li>
                <li><b>Remove:</b> removes the value for a given key from the hash table</li>
                <li><b>Find:</b> checks if a given key is in the hash table and returns its value</li>
            </ul>
            <br />
            <p>In an ideal situation, the hash function will provide a unique index for every key provided to it. However, it is possible to have two different keys that produce the same hash code. This is called a collision and can be handled in many different ways. One way to handle it is linear probing. This means that if a value is already located at the computed index when inserting a key and value, we perform a linear scan of the array to find the next open position, and insert the key and value there.</p>
            <br />
            <p>A key and value can be removed from the hash table similar to insertion. First the hash code is computed, then that index is checked for the given key and value. If it is not a linear scan is performed to find the target. If an empty slot is found in the linear scan, it means that key is not in the hash table and the scan ends. If the key and value are found, they are removed. Finding the value for a key can be done in exactly the same way, except the value is returned instead of deleting the key value pair.</p>
            <br />
            <p>Because the ideal position of elements can be computed in constant time for a Hash Table, most of its operations have an average-case complexity of O(1). However because of collisions and the potential need to resize the array of a hash table, the worst-case complexity of most operations is O(n).</p>
            <br />
            <table>
                <tbody>
                    <tr><th>Operation</th><th>Worst-Case</th><th>Average-Case</th></tr>
                    <tr><td>Build</td><td>O(1)</td><td>O(1)</td></tr>
                    <tr><td>Insert</td><td>O(n)</td><td>O(1)</td></tr>
                    <tr><td>Remove</td><td>O(n)</td><td>O(1)</td></tr>
                    <tr><td>Find</td><td>O(n)</td><td>O(1)</td></tr>
                </tbody>
            </table>
        </div>
    );
}

export default HashTableInformation;
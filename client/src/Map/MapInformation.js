import React from 'react';

const MapInformation = () => {
    return (
        <div className="information">
            <p>A Map is an Abstract Data Type (ADT) representing a collection of key and value pairs. Any value in the Map can be accessed using its corresponding key. Keys in a map must be unique, meaning each key can only have one corresponding value. The key value pairs in a map are stored in no particular order, they are simply a collection of data.</p>
            <br />
            <p><u>A Map has the following basic operations:</u></p>
            <ul>
                <li><b>Insert:</b> adds a new key and value pair to the map or sets a new value for a key</li>
                <li><b>Remove:</b> attempts to remove a key and value pair from the map</li>
                <li><b>Get:</b> attempts to return the value in the map for a given key</li>
            </ul>
            <br />
            <p>The Map ADT is typically implemented using a Hash Table. A Hash Table is a natural choice to implement a Map because it already has key and value pairs. Because a Hash Table has constant time complexities for insertion, removal, and get operations, a map has the same complexities for these operations.</p>
            <br />
            <table>
                <tbody>
                    <tr><th>Operation</th><th>Worst-Case</th><th>Average-Case</th></tr>
                    <tr><td>Insert</td><td>O(n)</td><td>O(1)</td></tr>
                    <tr><td>Remove</td><td>O(n)</td><td>O(1)</td></tr>
                    <tr><td>Get</td><td>O(n)</td><td>O(1)</td></tr>
                </tbody>
            </table>
        </div>
    );
}

export default MapInformation;
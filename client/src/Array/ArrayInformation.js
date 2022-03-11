import React from 'react';

const ArrayInformation = () => {
    return (
        <div className="information">
            <p>An array is a linear data structure where elements are stored in a contiguous block of memory. Each element typically takes up the same amount of space in memory so that the location of an element can be easily computed from its index. To find the location of the element in memory, the index is multiplied by the size of an element and then added to the base address of the array.</p>
            <br />
            <p><u>An Array has the following basic operations:</u></p>
            <ul>
                <li><b>Build:</b> initializes an array of a certain size by allocating space in memory</li>
                <li><b>Set:</b> sets the value of an element at a specific index in the array</li>
                <li><b>Delete:</b> removes an element at a specific index in the array</li>
                <li><b>Get:</b> returns the value of an element at a specific index in the array</li>
            </ul>
            <br />
            <p>Because an array allows for finding the location of an element in memory in constant time, operations like set, delete, and get can all be done in constant time. However, some more complex operations such as insertion and deletion from a full array require copying several elements to new locations in memory, and therefore take linear time.</p>
            <br />
            <table>
                <tbody>
                    <tr><th>Operation</th><th>Complexity</th></tr>
                    <tr><td>Build</td><td>O(1)</td></tr>
                    <tr><td>Set</td><td>O(1)</td></tr>
                    <tr><td>Delete</td><td>O(1)</td></tr>
                    <tr><td>Get</td><td>O(1)</td></tr>
                </tbody>
            </table>
        </div>
    );
}

export default ArrayInformation;
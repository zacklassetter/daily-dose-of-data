import React from 'react';

const ArrayListInformation = () => {
    return (
        <div className="information">
            <p>An Array List is a linear data structure. Values are stored in an array structure using a contiguous block of memory. An Array List is one possible implementation of a List, an Abstract Data Type (ADT).</p>
            <br />
            <p><u>An Array List has the following basic operations:</u></p>
            <ul>
                <li><b>Insert:</b> inserts an element into the array list at a specific index</li>
                <li><b>Remove:</b> removes an element from the array list at a specific index</li>
                <li><b>Get:</b> returns an element from the array list at a specific index without removing it</li>
            </ul>
            <br />
            <p>Since the information in an array list is stored contiguously in an array, it benefits from random access. Consequently, operations such as accessing an element from a given index are very inexpensive. The trade off for this is that insertion and deletion become expensive operations since they require creating a new array or copying several elements to new locations in memory.</p>
            <br />
            <table>
                <tbody>
                    <tr><th>Operation</th><th>Complexity</th></tr>
                    <tr><td>Insert at head</td><td>O(n)</td></tr>
                    <tr><td>Remove at head</td><td>O(n)</td></tr>
                    <tr><td>Get from head</td><td>O(1)</td></tr>
                    <tr><td>Insert at given index</td><td>O(n)</td></tr>
                    <tr><td>Remove at given index</td><td>O(n)</td></tr>
                    <tr><td>Get from given index</td><td>O(1)</td></tr>
                </tbody>
            </table>
        </div>
    );
}

export default ArrayListInformation;
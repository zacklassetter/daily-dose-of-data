import React from 'react';

const ListInformation = () => {
    return (
        <div className="information">
            <p>A list is an Abstract Data Type (ADT) that represents data in a linear structure. Elements can be added or removed at any point in the list. The list maintains a specific order depending on where in the list elements were inserted and removed.</p>
            <br />
            <p><u>A list includes the following basic operations:</u></p>
            <ul>
                <li><b>Insert:</b> inserts an element into the list at a specific index</li>
                <li><b>Remove:</b> removes an element from the list at a specific index</li>
                <li><b>Get:</b> returns an element from the list at a specific index without removing it</li>
            </ul>
            <br />
            <p><u>Since a List is an ADT, it has multiple possible implementations:</u></p>
            <ul>
                <li><b>Array List:</b> Elements are kept in an contiguous piece of memory in an array form. The benefit of this is its simplicity and relatively lower memory usage. Another benefit is the ability to reach an element at a given index in constant time. The cons of this implementation are that it has a limitted capacity and may need to copy all of its values to a new array to increase the capacity. Also, it takes linear time to insert or remove an element.</li>
                <li><b>Linked List:</b> Each element is kept with a pointer to the next element in the list. A pointer is kept for the first element in the list. The advantage of this is that it can dynamically resize at runtime and takes only as much memory as is needed. It also allows constant time removal or addition to the head, or any other place in the list if it has a pointer to that spot. A disadvantage of linked list is the greater memory cost to store values and pointers to the next node. Also, reaching an element at a given index takes linear time.</li>
            </ul>
            <br />
            <table>
                <tbody>
                    <tr><th></th><th>Array List</th><th>Linked List</th></tr>
                    <tr><th>Insert at head</th><td>O(n)</td><td><b>O(1)</b></td></tr>
                    <tr><th>Remove at head</th><td>O(n)</td><td><b>O(1)</b></td></tr>
                    <tr><th>Get from head</th><td>O(1)</td><td>O(1)</td></tr>
                    <tr><th>Insert at given index</th><td>O(n)</td><td>O(n)</td></tr>
                    <tr><th>Remove at given index</th><td>O(n)</td><td>O(n)</td></tr>
                    <tr><th>Get from given index</th><td><b>O(1)</b></td><td>O(n)</td></tr>
                </tbody>
            </table>
        </div>
    );
}

export default ListInformation;
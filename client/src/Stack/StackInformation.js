import React from 'react';

const StackInformation = () => {
    return (
        <div className="information">
            <p>A stack is an Abstract Data Type (ADT) that represents a linear data structure. Elements are stored in a sequential order depending on when they are added to the stack. Elements may only be added or removed from one end of the stack. Therefore a stack is a last-in-first-out (LIFO) data structure. When an element is removed from the stack, it must be the last element that was added onto the end. Likewise, the last element to be removed before the stack is empty would be the first element that was inserted.</p>
            <br />
            <p><u>A stack has the following basic operations:</u></p>
            <ul>
                <li><b>Push:</b> adds an element at the end of the stack</li>
                <li><b>Pop:</b> removes an element from the end of the stack</li>
                <li><b>Peek:</b> returns the element at the end of the stack without removing it</li>
            </ul>
            <br />
            <p><u>Since a stack is an ADT, it has multiple possible implementations:</u></p>
            <ul>
                <li><b>Array Implementation:</b> An array is allocated with a certain capacity to represent the stack. The index of the current top of the stack is kept track of. The advantages of this implementation are its simplicity and relatively low memory usage. The main disadvantage is that the size of the array cannot change so there is a limit to how much data can be stored. On the other hand, the space allocated may be way more than needed.</li>
                <li><b>Linked List Implementation:</b> A linked list is created to represent the stack. Elements are added and removed from the head of the linked last. The advantage of this implementation is its ability to be resized at runtime, therefore only using as much memory as is needed. The disadvantage of this is that the pointers involved in linked lists use more memory than a simple array.</li>
            </ul>
            <br />
            <table>
                <tbody>
                    <tr><th></th><th>Array Implementation</th><th>Linked List Implementation</th></tr>
                    <tr><th>Push</th><td>O(1)</td><td>O(1)</td></tr>
                    <tr><th>Pop</th><td>O(1)</td><td>O(1)</td></tr>
                    <tr><th>Peek</th><td>O(1)</td><td>O(1)</td></tr>
                </tbody>
            </table>
        </div>
    );
}

export default StackInformation
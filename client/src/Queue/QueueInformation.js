import React from 'react';

const QueueInformation = () => {
    return (
        <div className="information">
            <p>A queue is an Abstract Data Type (ADT) that represents a linear data structure. Elements may only be added to one end and removed from the other end of a queue. Therefore a queue is a first-in-first-out (FIFO) data structure. When an element is removed from the queue, it will be the earliest one added. The last element to be removed will be the last one added to the queue.</p>
            <br />
            <p><u>A queue has the following basic operations:</u></p>
            <ul>
                <li><b>Enqueue:</b> adds an element to the queue</li>
                <li><b>Dequeue:</b> removes an element from the queue</li>
                <li><b>Peek:</b> returns the next element to be removed from the queue without removing it</li>
            </ul>
            <br />
            <p><u>Since a queue is an ADT, it has multiple possible implementations:</u></p>
            <ul>
                <li><b>Linked List Implementation:</b> A linked list is created to represent the queue. Elements are enqueued at the tail of the linked list and dequeued at the head. A pointer is kept for both the head and tail to allow this. Often a doubly linked list is often used instead of this. The advantage of the linked list implementation is its ability to be resized and grown as much as necessary. The disadvantage of this is that the pointers involved in linked lists use more memory than a simple array.</li>
                <li><b>Array Implementation:</b> An array is allocated with a certain capacity to represent the queue. The index of both ends of the queue are kept track of. When we remove or add an element, these indices are updated. The array is used in a circular fashion so that our queue maintains a constant maximum capacity. The advantages of this implementation are its simplicity and relatively low memory usage. The main disadvantage is that the size of the array cannot change so there is a limit to how much data can be stored. On the other hand, the space allocated may be way more than needed.</li>
            </ul>
            <br />
            <table>
                <tbody>
                    <tr><th></th><th>Array Implementation</th><th>Linked List Implementation</th></tr>
                    <tr><th>Enqueue</th><td>O(1)</td><td>O(1)</td></tr>
                    <tr><th>Dequeue</th><td>O(1)</td><td>O(1)</td></tr>
                    <tr><th>Peek</th><td>O(1)</td><td>O(1)</td></tr>
                </tbody>
            </table>
        </div>
    );
}

export default QueueInformation;
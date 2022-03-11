import React from 'react';

const LinkedListInformation = () => {
	return (
		<div className="information">
			<p>A Linked List is a linear data structure consisting of several nodes. Each node contains an element value, and a pointer to the next node's location in memory. The last node in the list will have a pointer to null. A pointer to the head of the list is always kept track of. A Linked List is one possible implementation of a List, an Abstract Data Type (ADT).</p>
			<br />
			<p><u>A linked list includes the following basic operations:</u></p>
            <ul>
                <li><b>Insert:</b> inserts an element into the list at a specific index</li>
                <li><b>Remove:</b> removes an element from the list at a specific index</li>
                <li><b>Get:</b> returns an element from the list at a specific index without removing it</li>
            </ul>
            <br />
			<p>The nodes in a Linked List do not need to be stored in contiguous memory. Because of this, it benefits from the ability to insert and delete elements at any point in the list without restructuring or reallocating data in memory. However, one prominent trade off for these benefits is the lack of random access. This causes basic operations, such as obtaining an element by a given index or locating a point of insertion/deletion, to require iterating over the data structure.</p>
			<br />
			<table>
				<tbody>
					<tr><th>Operation</th><th>Complexity</th></tr>
					<tr><td>Insert at head</td><td>O(1)</td></tr>
					<tr><td>Remove at head</td><td>O(1)</td></tr>
					<tr><td>Get from head</td><td>O(1)</td></tr>
					<tr><td>Insert at given index</td><td>O(n)</td></tr>
					<tr><td>Remove at given index</td><td>O(n)</td></tr>
					<tr><td>Get from given index</td><td>O(n)</td></tr>
				</tbody>
			</table>

		</div>
		//TODO add more 
	);
}

export default LinkedListInformation;
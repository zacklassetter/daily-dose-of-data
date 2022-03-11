import React from 'react';

const BinarySearchTreeInformation = () => {
    return (
        <div className="information">
            <p>A Binary Search Tree is a tree data structure where elements are kept in an ordered pattern. For any given node, all of the elements in the left sub-tree are less than or equal to the given node, and all of the elements in the right sub-tree are greater than or equal to the given node.</p>
            <br />
            <p><u>A Binary Search Tree has the following basic operations:</u></p>
            <ul>
                <li><b>Insert:</b> inserts an element into tree</li>
                <li><b>Remove:</b> removes an element from the tree</li>
                <li><b>Find:</b> searches for an element in the tree</li>
            </ul>
            <br />
            <p>In order to maintain the ordered property of the tree, insertion and removal of elements must be done in a careful manner. For insertion the tree is traversed going left if the new value is less than the current node and going right if the new value is greater than the current node. Once we reach an empty spot, a new node is created there with the new value.</p>
            <br />
            <p>To remove a value from the tree, it becomes more complex. First we traverse the tree to find the node of the value we want to remove. If it has no children, we simply set its parent's child to null. If it has 1 child, we set its parent's child to its child. If it has 2 children, we find the leftmost child of the right sub-tree of the current node, set the current node to that value, and then delete the leftmost child of the right sub-tree. This can also be done with the rightmost child of the left sub-tree.</p>
            <br />
            <p>To understand the complexity of the operations in a Binary Search Tree we must consider the height of the tree. In the worst-case, the tree will be a straight line, and the height will be equal to the number of elements, O(n). In the average-case and best-case, the height of the tree will be O(log n).</p>
            <br />
            <table>
                <tbody>
                    <tr><th>Operation</th><th>Worst-Case</th><th>Average-Case</th></tr>
                    <tr><td>Insert</td><td>O(n)</td><td>O(log n)</td></tr>
                    <tr><td>Remove</td><td>O(n)</td><td>O(log n)</td></tr>
                    <tr><td>Find</td><td>O(n)</td><td>O(log n)</td></tr>
                </tbody>
            </table>
        </div>
    );
}

export default BinarySearchTreeInformation;
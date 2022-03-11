import React from 'react';

const BinaryTreeInformation = () => {
    return (
        <div className="information">
            <p>A Tree is a heirarchal data structure consisting of levels of nodes. Each node contains a value for that element in the tree, and some amount of pointers to children nodes. Since there can be any number of children nodes, a list is typically used to keep track of all of the children of a given node. The first node in the tree is known as the root, and is always kept track of as the start of the entire structure. The children of the root can be thought of as sub-trees, which are on there own also a data structure. Depending on how many children that a node has, the tree can be very different.</p>
            <br />
            <p>One specific type of Tree is a Binary Tree. A Binary Tree is a data structure in which each node in the tree contains at most two children nodes, a left and a right child. Each node contains the value of an element, a pointer to the left child node, and a pointer to the right child node. If a node does not have a left or right child it typically has a null pointer.</p>
            <br />
            <p><u>Binary Trees are used to implement several other data structures:</u></p>
            <ul>
                <li><b>Binary Search Tree:</b> elements are kept in an ordered pattern to allow for fast searching</li>
                <li><b>AVL Tree:</b> after insertion or deletion the tree balances itself to keep a minimal height</li>
                <li><b>Binary Heap:</b> elements are kept in an ordered pattern to keep extrema at the root</li>
            </ul>
            <br />
            <p>When we consider trees, it is often useful to think about the height of the tree. This is because operations that require a single traversal down the tree will have a complexity equal to the height. Because of its heirarchical structure, a Binary Tree has an average-case height of O(log n) where n is the number of elements. In the worst-case where the tree is just a sequence of nodes with only right or left children, the height of the tree becomes O(n).</p>
            <br />
            <table>
                <tbody>
                    <tr><th>Property</th><th>Worst-Case</th><th>Average-Case</th></tr>
                    <tr><td>Height</td><td>O(n)</td><td>O(log n)</td></tr>
                </tbody>
            </table>
        </div>
    );
}

export default BinaryTreeInformation;
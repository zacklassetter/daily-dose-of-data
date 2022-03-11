import React from 'react';

const BinaryHeapInformation = () => {
    return (
        <div className="information">
            <p>A Binary Heap is special type of Binary Tree with a few special properties. The first property is that it is a complete tree. This means that every level in the tree is completely filled with nodes except the last level, where all of the nodes are as far left as possible. The second property is that any given node in the tree has a smaller or greater value than all of the nodes in its child sub-trees. In a Min Heap, the value will always be smaller than all of its children. In a Max Heap the value will always be larger than all of its children. Here we will be using a Min Heap.</p>
            <br />
            <p><u>A Binary Heap has the following basic operations:</u></p>
            <ul>
                <li><b>Insert:</b> inserts an element into the heap</li>
                <li><b>Remove:</b> removes the element at the root of the heap</li>
            </ul>
            <br />
            <p>In order to maintain the special properties of the heap, insertion and removal of elements must be done in a careful manner. For inserting a value, a new node is created at the left-most position in the lowest layer of the tree that is not yet filled. Then this new node is repeatedly compared with its parent. If its value is less than its parent, it must swap positions with its parent in order to maintain the second property of a heap. It repeats this process until the parent is less than the new node, or the new node becomes the root.</p>
            <br />
            <p>In a heap removal is only done from the root of the tree. Since all of the nodes in the left and right sub-trees of the root are greater than the root, the root will be the minimum value in the heap. When we remove the root, we replace it with the left-most bottom node in the tree to maintain the first property of a heap. Then we must repeatedly compare the new root with its children elements. If the new node is less than the two children nodes, then the second property of a heap is maintained, and we are done. If it is not less than the two children, it is swapped with the smaller of the two children, and the process repeats. It must swap with the smaller of the two children because that child will become the parent of the other child. Once the new node is smaller than both of its children, or it reaches the bottom of the tree, the removal process is finished.</p>
            <br />
            <p>Because a Binary Heap is a complete tree, it can be stored in the form of an array with each level stored consecutively from left to right. The root is stored at index 0, and any node at index i  has its two children at index 2*i+1 and index 2*i+2. The parent of any node at index i is the floor of (i-1)/2. The advantage of storing the tree in an array form is that we do not need extra memory to store pointers, and we do not have to deal with changing pointers when nodes are swapped.</p>
            <br />
            <p>The complexities of the operations in a Binary Heap are dependent on the height of the tree, h. Because it is a complete tree, the height will always be O(log n). For insertion, the worst-case scenario is that the new node has to move all the way up to the root of the tree. For removal, the worst-case is that the node swapped with the previous root has to move all the way back to the bottom of the tree. Both of these things will take O(h) comparisons, so both insertion and removal have a complexity of O(log n).</p>
            <br />
            <table>
                <tbody>
                    <tr><th>Operation</th><th>Complexity</th></tr>
                    <tr><td>Insert</td><td>O(log n)</td></tr>
                    <tr><td>Remove</td><td>O(log n)</td></tr>
                </tbody>
            </table>
        </div>
    );
}

export default BinaryHeapInformation;
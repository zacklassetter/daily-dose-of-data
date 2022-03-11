import React from 'react';

const BreadthFirstSearchInformation = () => {
    return (
        <div className="information">
            <p>Breadth First Search (BFS) is an algorithm to search for a value in a tree data structure. Every node is traversed in a certain order until either the value is found, or every node in the tree has been visited meaning the value is not in the tree.</p>
            <br />
            <p>In a Breadth First Search, we start searching at the root of the tree. We then traverse down the tree level by level, checking every node in each level from left to right. The way that this is typically implemented is using a queue. First we start by adding the root to our queue. Then we dequeue the root from the queue, check if it was our target value, and then enqueue all of its children into the queue. We repeat this with every element that we dequeue from the queue until we find our target value, or the queue is empty. If the queue is empty and we have not found our target value then it means that value is not in the tree.</p>
            <br />
            <p>For any tree with n nodes, the BFS algorithm will have a time complexity of O(n). This is because in the worst-case it will visit every node in the tree once, and compare its value with the target value. The space complexity of BFS is O(n), because in the worst case all of the nodes of the tree besides the root will be on a single level, and they must all be stored in the queue.</p>
            <br />
            <table>
                <tbody>
                    <tr><th>Depth First Search</th><th>Complexity</th></tr>
                    <tr><td>Time Complexity</td><td>O(n)</td></tr>
                    <tr><td>Space Complexity</td><td>O(n)</td></tr>
                </tbody>
            </table>
        </div>
    );
}

export default BreadthFirstSearchInformation;
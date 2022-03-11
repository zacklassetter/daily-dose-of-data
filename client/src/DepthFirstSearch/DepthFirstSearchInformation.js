import React from 'react';

const DepthFirstSearchInformation = () => {
    return (
        <div className="information">
            <p>Depth First Search (DFS) is an algorithm to search for a value in a tree data structure. Every node is traversed in a certain order until either the value is found, or every node in the tree has been visited meaning the value is not in the tree.</p>
            <br />
            <p>In a Depth First Search, we start searching at the root of the tree. The root of the tree becomes our current node. We first check if the current node contains our target value. Then we recursively check all of the children sub-trees of the current node. For a binary tree, this means we recursively check the entire left sub-tree of the current node and the entire right sub-tree. In this way we first check all the way down the left-most path down the tree, and then backtrack when there are no more nodes left on that branch, and continue until every node has been visited.</p>
            <br />
            <p>For any tree with n nodes, the DFS algorithm will have a time complexity of O(n). This is because in the worst-case it will visit every node in the tree once, and compare its value with the target value. The space complexity of DFS is constant because it requires no extra space.</p>
            <br />
            <table>
                <tbody>
                    <tr><th>Depth First Search</th><th>Complexity</th></tr>
                    <tr><td>Time Complexity</td><td>O(n)</td></tr>
                    <tr><td>Space Complexity</td><td>O(1)</td></tr>
                </tbody>
            </table>
        </div>
    );
}

export default DepthFirstSearchInformation;
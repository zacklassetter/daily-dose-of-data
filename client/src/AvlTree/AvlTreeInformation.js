import React from 'react';
import BinaryTreeDisplay from '../BinaryTree/BinaryTreeDisplay.js';

class AvlTreeClass {
    constructor() {
        this.root = null;
        this.height = 0;
        this.list = [];
    }
}

//class for node in binary tree
class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}



const AvlTreeInformation = () => {
    var leftleft = new AvlTreeClass();
    var llroot = new BinaryTreeNode("z");
    var lly = new BinaryTreeNode("y");
    var llx = new BinaryTreeNode("x");
    leftleft.root = llroot;
    llroot.left = lly;
    lly.left = llx;

    var rightright = new AvlTreeClass();
    var rrroot = new BinaryTreeNode("z");
    var rry = new BinaryTreeNode("y");
    var rrx = new BinaryTreeNode("x");
    rightright.root = rrroot;
    rrroot.right = rry;
    rry.right = rrx;

    var rightleft = new AvlTreeClass();
    var rlroot = new BinaryTreeNode("z");
    var rly = new BinaryTreeNode("y");
    var rlx = new BinaryTreeNode("x");
    rightleft.root = rlroot;
    rlroot.right = rly;
    rly.left = rlx;
    //var rly = new Binar 

    var leftright = new AvlTreeClass();
    var lrroot = new BinaryTreeNode("z");
    var lry = new BinaryTreeNode("y");
    var lrx = new BinaryTreeNode("x");
    leftright.root = lrroot;
    lrroot.left = lry;
    lry.right = lrx;

    var rrotation = new AvlTreeClass();
    var rrrotroot = new BinaryTreeNode("y");
    rrrotroot.left = new BinaryTreeNode("x");
    rrrotroot.right = new BinaryTreeNode("z");
    rrotation.root = rrrotroot;

    var lrotation = new AvlTreeClass();
    var lrotroot = new BinaryTreeNode("y");
    lrotroot.left = new BinaryTreeNode("z");
    lrotroot.right = new BinaryTreeNode("x");
    lrotation.root = lrotroot;
    
    return (
        <div className="information">
            <p>An AVL Tree is a self-balancing binary search tree. Thus, it inherits the properties of order as well as the restriction that each node has either zero, one, or two children. The additional restriction placed on AVL Trees is that the height of two sibling subtrees differ by at most one. It maintains this condition by performing a series of rotational operations on nodes following insertion and deletion.</p>
            
            <br />
            <p><u>An AVL Tree has the following basic operations:</u></p>
            <ul>
                <li><b>Insert:</b> inserts an element into tree</li>
                <li><b>Remove:</b> removes an element from the tree</li>
                <li><b>Find:</b> searches for an element in the tree</li>
            </ul>
            <br />
            <p>At insertion, a regular BST insertion is performed. Next, if there is an unbalanced node found on the path up from the newly inserted node to the root, then a rotation will occur. The exact rotation operation depends on the relative postions of the first unbalanced node and its two immediate adjacent ancestors on the path back to the newly inserted node.</p>
            <br />
            <p>Likewise, at deletion, a regular BST deletion is performed and a rotation may also occur. However, whether or not the rotation occurs and the exact rotation operation depends instead on the relative positions of the first unbalanced node on the path up the tree as well as its two immediate ancestors that are each the largest height child of their parent node.</p>
            <br />
            <p>Because of the fact that AVL Trees maintain a balanced state, they have advantages over a traditional Binary Search Tree. The height of the tree will always be O(log n), where as a regular BST may have a height of O(n). The worst-case time complexities for each basic operation are O(log n) in an AVL Tree rather than O(n).</p>
            <br />
            <p>AVL trees use two rotation operations to rotate nodes in a tree: </p>
            
            
            <div style={{ border: '2px solid black', padding: "25px", borderRadius: "10px"}}>
                <p style={{ textAlign: "center" }}><b>Right Rotation (node z)</b></p>
                <BinaryTreeDisplay tree={leftleft} />
                <h2 style={{ textAlign: "center", fontSize: "50px"}}>&#129047;</h2>
                <BinaryTreeDisplay tree={rrotation} />
                <br />
                <p style={{ textAlign: "center" }}><b>Left Rotation (node z)</b></p>
                <BinaryTreeDisplay tree={rightright} />
                <h2 style={{ textAlign: "center", fontSize: "50px" }}>&#129047;</h2>
                <BinaryTreeDisplay tree={lrotation} />
                <br />
            </div>
            <br />
            <h3>Insertion and Deletion may result in the following patterns of nodes and thus the necessity to perform rotation operations to rebalance the tree.</h3>

            <div style={{ border: '2px solid black', padding: "25px", borderRadius: "10px" }}>
                <p style={{ textAlign: "center" }}><b>Left Left</b></p>
                <BinaryTreeDisplay style={{ transform: "translate(100px, 100px)" }} tree={leftleft} />
                <p style={{ textAlign: "center" }}>Resolved by a right-rotation at node z.</p>
                
                <br />
                <br />
                <p style={{ textAlign: "center" }}><b>Right Right</b></p>

                <BinaryTreeDisplay tree={rightright} />
                <p style={{ textAlign: "center" }}>Resolved by a left-rotation at node z.</p>
                
                <br />
                <br />
                <p style={{ textAlign: "center" }}><b>Right Left</b></p>
                
                <BinaryTreeDisplay tree={rightleft} />
                <p style={{ textAlign: "center" }}>Resolved by a right-rotation at node y,</p>
                <p style={{ textAlign: "center" }}>followed by a left-rotation at node z.</p>
                <br />
                <br />
                <p style={{ textAlign: "center" }}><b>Left Right</b></p>
                <BinaryTreeDisplay tree={leftright} />
                <p style={{ textAlign: "center" }}>Resolved by a left-rotation at node y,</p>
                <p style={{ textAlign: "center" }}>followed by a right-rotation at node z.</p>
                

                </div>
            <br />
            <table>
                <tbody>
                    <tr><th>Operation</th><th>Worst-Case</th><th>Average-Case</th><th>BST Worst-Case</th></tr>
                    <tr><td>Insert</td><td>O(log n)</td><td>O(log n)</td><td>O(n)</td></tr>
                    <tr><td>Remove</td><td>O(log n)</td><td>O(log n)</td><td>O(n)</td></tr>
                    <tr><td>Find</td><td>O(log n)</td><td>O(log n)</td><td>O(n)</td></tr>
                </tbody>
            </table>
        </div>
    );
}

export default AvlTreeInformation;
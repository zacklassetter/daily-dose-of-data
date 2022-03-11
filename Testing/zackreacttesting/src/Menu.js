'use strict';

function DSMenu(props) {
    return <li><a href="#">Data Structures</a>
        <ul>
            <li>List</li>
            <li>Stack</li>
            <li>Queue</li>
        </ul>
    </li>
}

function AlgoMenu(props) {
    return <li><a href="#">Algorithms</a>
        <ul>
            <li>Insertion Sort</li>
            <li>Selection Sort</li>
            <li>Bubble Sort</li>
            <li>Merge Sort</li>
            <li>Quick Sort</li>
        </ul>
    </li>
}

function Menu(props) {
    return <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <DSMenu />
            <AlgoMenu />
        </ul>
    </nav>
}

let domContainer = document.querySelector('#menu_container');
ReactDOM.render(<Menu />, domContainer);
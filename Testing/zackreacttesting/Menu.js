'use strict';

function DSMenu(props) {
    return React.createElement(
        "li",
        null,
        React.createElement(
            "a",
            { href: "#" },
            "Data Structures"
        ),
        React.createElement(
            "ul",
            null,
            React.createElement(
                "li",
                null,
                "List"
            ),
            React.createElement(
                "li",
                null,
                "Stack"
            ),
            React.createElement(
                "li",
                null,
                "Queue"
            )
        )
    );
}

function AlgoMenu(props) {
    return React.createElement(
        "li",
        null,
        React.createElement(
            "a",
            { href: "#" },
            "Algorithms"
        ),
        React.createElement(
            "ul",
            null,
            React.createElement(
                "li",
                null,
                "Insertion Sort"
            ),
            React.createElement(
                "li",
                null,
                "Selection Sort"
            ),
            React.createElement(
                "li",
                null,
                "Bubble Sort"
            ),
            React.createElement(
                "li",
                null,
                "Merge Sort"
            ),
            React.createElement(
                "li",
                null,
                "Quick Sort"
            )
        )
    );
}

function Menu(props) {
    return React.createElement(
        "nav",
        null,
        React.createElement(
            "ul",
            null,
            React.createElement(
                "li",
                null,
                React.createElement(
                    "a",
                    { href: "#" },
                    "Home"
                )
            ),
            React.createElement(DSMenu, null),
            React.createElement(AlgoMenu, null)
        )
    );
}

var domContainer = document.querySelector('#menu_container');
ReactDOM.render(React.createElement(Menu, null), domContainer);
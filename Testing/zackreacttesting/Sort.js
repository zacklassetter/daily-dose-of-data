'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sort = function (_React$Component) {
    _inherits(Sort, _React$Component);

    function Sort(props) {
        _classCallCheck(this, Sort);

        var _this = _possibleConstructorReturn(this, (Sort.__proto__ || Object.getPrototypeOf(Sort)).call(this, props));

        _this.insertSort = function () {
            if (_this.state.unsorted === "") {
                _this.setState(function (state) {
                    return {
                        unsorted: "",
                        sorted: _this.state.sorted
                    };
                });
            } else {
                _this.setState(function (state) {
                    return {
                        unsorted: _this.state.unsorted.substring(1),
                        sorted: insert(_this.state.unsorted[0], _this.state.sorted)
                    };
                });
            }
        };

        _this.state = {
            unsorted: "18952093",
            sorted: ""
        };
        return _this;
    }

    //componentDidMount() {
    //    this.setState((state) => ({
    //        unsorted: this.props.sortInput
    //    }));
    //}


    _createClass(Sort, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { style: { textAlign: "center" } },
                React.createElement(
                    "h1",
                    null,
                    this.state.unsorted
                ),
                React.createElement(
                    "button",
                    { onClick: this.insertSort },
                    "Insert"
                ),
                React.createElement(
                    "h1",
                    null,
                    this.state.sorted
                )
            );
        }
    }]);

    return Sort;
}(React.Component);

function insert(c, str) {
    var i = 0;
    while (parseInt(c) > parseInt(str[i])) {
        i++;
    }
    return str.substring(0, i) + c + str.substring(i);
}

var domContainer = document.querySelector('#sort_container');
ReactDOM.render(React.createElement(Sort, null), domContainer);
'use strict';

class Sort extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            unsorted: "18952093",
            sorted: ""
        }
    }

    //componentDidMount() {
    //    this.setState((state) => ({
    //        unsorted: this.props.sortInput
    //    }));
    //}
    

    insertSort = () => {
        if (this.state.unsorted === "") {
            this.setState((state) => ({
                unsorted: "",
                sorted: this.state.sorted
            }));
        }
        else {
            this.setState((state) => ({
                unsorted: this.state.unsorted.substring(1),
                sorted: insert(this.state.unsorted[0], this.state.sorted)
            }));
        }
        
    }
    
    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <h1>{this.state.unsorted}</h1>
                <button onClick={this.insertSort}>Insert</button>
                <h1>{this.state.sorted}</h1>
            </div>
        );
    }
}




function insert(c, str) {
    let i = 0;
    while (parseInt(c) > parseInt(str[i])) {
        i++;
    }
    return str.substring(0, i) + c + str.substring(i);
}


let domContainer = document.querySelector('#sort_container');
ReactDOM.render(<Sort/>, domContainer);

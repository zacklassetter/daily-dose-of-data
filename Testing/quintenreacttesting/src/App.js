import './App.scss';
import Graph from 'react-graph-vis';

function App() {
  
  const graph = {
    nodes: [
      { id: 1, label: "1" },
      { id: 2, label: "2" },
      { id: 3, label: "3" },
      { id: 4, label: "4" }
    ],
    edges: [
      { from: 1, to: 2 },
      { from: 2, to: 3 },
      { from: 3, to: 1 },
      { from: 4, to: 3 },
      { from: 4, to: 1 }
    ]
  };

  const options = {
    layout: {
      improvedLayout: true
    },
    edges: {
      color: "#000"
    },
    nodes: {
      color: {
        border: "#f00",
        background: "#fff"
      }
    },
    width: "500px",
    height: "500px"
  };

  return (
    <div className="App">
      <Graph graph={graph} options={options} />
    </div>
  );
}

export default App;

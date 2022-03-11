const path = require("path");
const express = require("express");
const cron = require("node-cron");

const PORT = process.env.PORT || 3001;
const app = express();

const visualizations = ["Array", "List", "Array List", "Linked List", "Stack", "Queue", "Binary Tree", "Binary Search Tree", "AVL Tree", "Binary Heap", "Hash Table", "Set", "Map", "Insertion Sort", "Selection Sort", "Bubble Sort", "Merge Sort", "Quick Sort", "Heap Sort", "Linear Search", "Binary Search", "Depth First Search", "Breadth First Search"];
var visualization = visualizations[Math.floor(Math.random()*visualizations.length)];
cron.schedule("0 4 * * *", () => {
    	let oldVisualization = visualization;
	while (oldVisualization === visualization) {
		visualization = visualizations[Math.floor(Math.random()*visualizations.length)];
	}
});

app.use(express.static(path.resolve(__dirname, "../client/build")));
app.get("/api", (req, res) => {
    res.json({ visualization: visualization });
});
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
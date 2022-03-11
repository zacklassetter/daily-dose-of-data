// change color of paragraphs
var paras = document.getElementsByTagName("p");
paras[0].style.color = "Green";
paras[1].style.color = "Red";

// functions to change the background color of a paragraph when hovering over it
function highlight(element) {
	element.style.backgroundColor = "Blue";
}
function dehighlight(element) {
	element.style.backgroundColor = "LightBlue";
}

// function to remove paragraphs 1 and 2
function removeParagraphs(element) {
	element.removeChild(document.getElementById("para1"));
	element.removeChild(document.getElementById("para2"));
}

// function to show new paragraph
function addParagraph() {
	var para = document.createElement("p");
	para.id = "para4";
	var paratext = document.createTextNode("Paragraph 4");
	para.appendChild(paratext);
	var div = document.getElementById("div2");
	var para3 = document.getElementById("para3");
	if (para3.nextSibling.id != "para4"){
		div.insertBefore(para, para3.nextSibling);
	}
}

// function to toggle color
function toggleColor() {
	head = document.getElementById("head2");
	if (head.style.color == "red"){
		head.style.color = "green";
	} else {
		head.style.color = "red";
	}
}
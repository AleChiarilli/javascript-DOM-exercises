let button = document.getElementById("superDuperButton");
button.addEventListener("click", function() {
	// Your code here
let parent = document.querySelector("#myList");
let child = document.createElement("li");
child.innerHTML = "new Element";
parent.appendChild(child)

});

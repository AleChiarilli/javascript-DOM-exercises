let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

// Your code here
let parent = document.querySelector("#mySelect");
for (let i = 0; i < countries.length; i++) {
    let newOption = document.createElement("option");
    newOption.innerHTML = `${countries[i]}`;
    parent.appendChild(newOption);
    
}

parent.addEventListener("change", (e) => {
    let selectedCountry = e.target.value;
    alert(`${selectedCountry}`);
})
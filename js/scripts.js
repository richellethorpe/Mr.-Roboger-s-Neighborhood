//UI logic
window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();

    const userInputValue = document.getElementById("userInput").value;
  
    document.querySelector("p#resultValues").innerText = userInputValue;
    document.querySelector("div#results").removeAttribute("class");
  }
}

//Business Logic


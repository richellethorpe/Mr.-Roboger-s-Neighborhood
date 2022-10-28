//UI logic
window.addEventListener("load", function() {
  let form = document.querySelector("form");
  form.addEventListener("submit", getResult);
});

function getResult(event) {
  event.preventDefault();

    const userInputValue = document.getElementById("userInput").value;
    const resultDisplay= countNumbers(parseInt(userInputValue));
  
    document.querySelector("p#resultDisplay").innerText = resultDisplay;
    document.querySelector("div#results").removeAttribute("class");
  }


//Business Logic

//const resultArray = userInputValue.split();

function countNumbers (countTo) {
  const resultArray = [];
  for (let i = 0; i <= countTo; i += 1) {
    resultArray.push(i);
  }
  return resultArray;
}



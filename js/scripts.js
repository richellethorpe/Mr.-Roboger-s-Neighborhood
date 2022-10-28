//UI logic
window.addEventListener("load", function() {
  let form = document.querySelector("form");
  form.addEventListener("submit", getResult);
});

function getResult(event) {
  event.preventDefault();

    const userInputValue = document.getElementById("userInput").value;
    const resultDisplay= countNumbers(parseInt(userInputValue));
    const p =document.querySelector("p#resultValues");
    document.querySelector("p#resultValues").innerText = resultDisplay;
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



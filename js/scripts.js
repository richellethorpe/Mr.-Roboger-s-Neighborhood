//UI logic
window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();

    const userInputValue = document.getElementById("userInput").value;
  
    document.querySelector("p#resultValues").innerText = resultArray;
    document.querySelector("div#results").removeAttribute("class");
  }
}

//Business Logic

//const resultArray = userInputValue.split();

function countNumbers (countTo) {
 
    const resultArray = [];
    for (let i = 0; i <= countTo; i += countBy) {
      resultArray.push(i);
    }
    return resultArray;
  }

//function countUp (countTo) {
   //let resultArrayNew = [];
   //for(let i = 1; i<=userInputValue; i+= 1) {
   // resultArray.push(i);
    
 //  }
  // return resultArray
//}

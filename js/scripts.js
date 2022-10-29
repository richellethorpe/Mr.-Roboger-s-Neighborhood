//UI logic
window.addEventListener("load", function() {
  let form = document.querySelector("form");
  form.addEventListener("submit", getResult);
});

function getResult(event) {
  event.preventDefault();

  const userInputNumber = document.getElementById("userInput").value;
  console.log(userInputNumber);
  const resultArray = countNumbers(userInputNumber);
  document.querySelector("p#resultValues").innerText = resultArray;
  document.querySelector("div#results").removeAttribute("class");
  console.log(resultArray);
  }


//Business Logic


function countNumbers (inputNum) {

  let userNumbersArray = [];
  let resultArray = [];
  for (let i = 0; i <= inputNum; i += 1) {
    userNumbersArray.push(i.toString());
    
  }
  userNumbersArray.forEach( function (element){
    if(element.includes("3")){
    resultArray.push(" Won't you be my neighbor?");
    }else if (element.includes("2")){
    resultArray.push(" Boop!");
    }else if (element.includes("1")){
    resultArray.push(" Beep!");
    }else {
    resultArray.push((" " + element))
  }
  })
  return resultArray;
  

}
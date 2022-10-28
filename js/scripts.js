//UI logic
window.addEventListener("load", function() {
  let form = document.querySelector("form");
  form.addEventListener("submit", getResult);
});

function getResult(event) {
  event.preventDefault();

    const imputNum = document.getElementById("userInput").value;
    const resultArray= countNumbers(inputNum);
    const p =document.querySelector("p#resultValues");
    document.querySelector("p#resultValues").innerText = resultArray;
    document.querySelector("div#results").removeAttribute("class");
  }


//Business Logic


function countNumbers (inputNum) {
  const userNumbersArray = [];
  let resultArray = [];
  for (let i = 0; i <= inputNum; i += 1) {
    userNumbersArray.push(i.toString());
    
  }
  userNumbersArray.forEach( function (element){
    if(element.includes("3")){
    resultArray.push("Won't you be my neighbor?");
    }else if (element.includes("2")){
    resultArray.push("Beep!");
    }else if (element.includes("1")){
    resultArray.push("Boop!");
    }else {
    resultArray.push(element)
  }
  })

  return userNumbersArray;

}
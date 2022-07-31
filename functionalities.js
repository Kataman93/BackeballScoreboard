
const additionalNumbers = document.querySelectorAll(".additional-numbers span");
const Host = document.querySelector(".Host span");
const Guest = document.querySelector(".Guest span");
const newGame = document.querySelector(".New-game");
const save = document.querySelector(".Save");
const deleteResult = document.querySelector(".Delete");
const previousResult = document.querySelector(".Previous-result p");
let count1 = 0;
let count2 = 0;
let savePreviousResult = "";
let deletePreviousResult = "";
let storeCurrentResult1 = JSON.parse(localStorage.getItem("currentResult1"));
let storeCurrentResult12 = JSON.parse(localStorage.getItem("currentResult2"));
let storePreviousResult = JSON.parse(localStorage.getItem("savePreviousResult"));
   
if(storeCurrentResult1) {
      count1 = storeCurrentResult1;
      Host.innerHTML = count1;
   }

let storeCurrentResult2 = JSON.parse(localStorage.getItem("currentResult2")); 

if(storeCurrentResult2) {
      count2 = storeCurrentResult2;
      Guest.innerHTML = count2;
   }

if(storeCurrentResult1 && storeCurrentResult2) {
   savePreviousResult = storePreviousResult;
   previousResult.innerHTML = "Previous result: " + savePreviousResult;
   }

/*if(storeCurrentResult1 === "0" && storeCurrentResult2 === "0") {
     count1 = 0;
     count2 = 0;
     Guest.innerHTML = count1;
     Host.innerHTML = count2;
   }*/


additionalNumbers[0].addEventListener("click", ()=> {
   count1 += 1;
   Host.innerHTML = count1;
   localStorage.setItem("currentResult1", JSON.stringify(count1));
})
additionalNumbers[1].addEventListener("click", ()=> {
   count1 += 2;
   Host.innerHTML = count1;
   localStorage.setItem("currentResult1", JSON.stringify(count1));
})
additionalNumbers[2].addEventListener("click", ()=> {
   count1 += 3;
   Host.innerHTML = count1;
   localStorage.setItem("currentResult1", JSON.stringify(count1));
})
additionalNumbers[3].addEventListener("click", ()=> {
   count2 += 1;
   Guest.innerHTML = count2;
   localStorage.setItem("currentResult2", JSON.stringify(count2))
})
additionalNumbers[4].addEventListener("click", ()=> {
   count2 += 2;
   Guest.innerHTML = count2;
   localStorage.setItem("currentResult2", JSON.stringify(count2))
})
additionalNumbers[5].addEventListener("click", ()=> {
   count2 += 3;
   Guest.innerHTML = count2;
   localStorage.setItem("currentResult2", JSON.stringify(count2));
})

newGame.addEventListener("click", ()=> {
    count1 = 0;
    count2 = 0;
    Guest.innerHTML = count1;
    Host.innerHTML = count2;
    localStorage.setItem("currentResult1", JSON.stringify(count1));
    localStorage.setItem("currentResult2", JSON.stringify(count2));
   
})

save.addEventListener("click", ()=> {
   savePreviousResult = `(${count1} - ${count2}) `;
   previousResult.innerHTML = "Previous result: " + savePreviousResult;
   localStorage.setItem("savePreviousResult", JSON.stringify(savePreviousResult) );
})

deleteResult.addEventListener("click", ()=> {
   previousResult.innerHTML = "Previous result: ";
})






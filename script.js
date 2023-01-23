const myCalculator = document.querySelector(".myCal");

const myKeys = [
  ["1", "2", "3", "+"],
  ["4", "5", "6", "-"],
  ["7", "8", "9", "*"],
  ["C", "0", "=", "/"],
];

const myOper = ["+", "-", "*", "/"];

let myOutput;

document.addEventListener("DOMContentLoaded", () => {
  myOutput = document.createElement("div");

  myOutput.innerHTML = "0";

  myOutput.classList.add("output");

  myCalculator.appendChild(myOutput);

  for (let i = 0; i < myKeys.length; i++) {
    let tempRow = document.createElement("div");
    //tempRow.innerHTML = 0;
    tempRow.classList.add("row");

    for (let j = 0; j < myKeys[i].length; j++) {
      let key = document.createElement("div");

      key.innerText = myKeys[i][j];

      key.classList.add("btn");

      key.addEventListener("click", btnClick);

      tempRow.appendChild(key);
    }

    myCalculator.appendChild(tempRow);
  }
});

function btnClick(e) {
  //console.log(this.innerText);

  let myValue = this.innerText;

  let myCal = myOutput.innerText;

  if (myCal == "0") {
    myCal = "";
  }

  if (myValue == "=") {
    myCal = eval(myCal);
  } else {
    let lastChar = myCal.substring(myCal.length - 1);
    console.log(lastChar);

    if (myOper.includes(myValue)) {
      if (myOper.includes(lastChar)) {
        myCal = myCal.substring(0, myCal.length - 1);
      } else myCal = eval(myCal);
    }

    myCal = myCal + myValue;
  }

  if (myValue == "C") {
    myCal = 0;
  }

  myOutput.innerText = myCal;
}

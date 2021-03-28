const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById("minDec");
let minUni = document.getElementById("minUni");
let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");
let milDec = document.getElementById("milDec");
let milUni = document.getElementById("milUni");
let splits = document.getElementById("splits");

function printTime() {
  // ... your code goes here
  printMinutes();
  printSeconds();
}

function printMinutes() {
  // ... your code goes here
  let minutesUni = document.getElementById("minUni");
  let minutesDec = document.getElementById("minDec");
  minutesDec.innerText = chronometer.twoDigitsNumber(
    chronometer.getMinutes()
  )[0];
  minutesUni.innerText = chronometer.twoDigitsNumber(
    chronometer.getMinutes()
  )[1];
}

function printSeconds() {
  // ... your code goes here
  let secondsUni = document.getElementById("secUni");
  let secondsDec = document.getElementById("secDec");
  secondsDec.innerText = chronometer.twoDigitsNumber(
    chronometer.getSeconds()
  )[0];
  secondsUni.innerText = chronometer.twoDigitsNumber(
    chronometer.getSeconds()
  )[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
  let splits = document.getElementById("splits");
  splits.innerHTML = "";
}

function setStopBtn() {
  // ... your code goes here
  if (btnLeft.classList.contains("stop")) {
    btnLeft.classList.replace("stop", "start");
    chronometer.stopClick();
    btnLeft.innerText = "START";
  }
  if (btnRight.classList.contains("split")) {
    btnRight.classList.replace("split", "reset");
    btnRight.innerText = "RESET";
  }
}

function setSplitBtn() {
  // ... your code goes here
  let splits = document.getElementById("splits");
  let li = document.createElement("li");
  let liText = document.createTextNode(chronometer.splitClick());
  li.appendChild(liText);
  splits.appendChild(li);
}

function setStartBtn() {
  // ... your code goes here
  if (btnLeft.classList.contains("start")) {
    btnLeft.classList.replace("start", "stop");
    btnLeft.innerText = "STOP";
    chronometer.startClick(printTime);
  }
  if (btnRight.classList.contains("reset")) {
    btnRight.classList.replace("reset", "split");
    btnRight.innerText = "SPLIT";
  }
}

function setResetBtn() {
  // ... your code goes here
  document.querySelectorAll(".number").forEach((span) => (span.innerText = 0));
  chronometer.resetClick();
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  // ... your code goes here
  console.log("left button clicked");
  if (btnLeft.classList.contains("start")) {
    setStartBtn();
  } else {
    setStopBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  // ... your code goes here
  console.log("right button clicked");
  if (btnRight.classList.contains("reset")) {
    setResetBtn();
    clearSplits();
  } else {
    setSplitBtn();
  }
});

/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(estrim) {
  const [hr, min] = estrim.split(':')
  const timeInt = parseInt(hr) * 60 + parseInt(min)
  if (timeInt < 60 * 12) {
    return "Good Morning"
  }
  else if (timeInt <= 60 * 17) {
    return "Good Afternoon"
  }
  else {
    return "Good Evening"
  }
}

function displayMessage(estrim) {
  document.getElementById("greeting").innerText = estrim
}
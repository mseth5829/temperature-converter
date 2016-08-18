var input = 0

function fToC (value) {
  var conversion = (value-32)*5/9;
  return conversion
}

function cToF (value) {
  var conversion = value * 9/5 + 32;
  return conversion
}

function getInput() {
  return function () {
    console.log("click is set up");
    input = document.getElementById("input").value;
    return input;
  }
}

function giveOutput() {
  return function () {
    var checkedFarenheit = document.getElementById("farenheit").checked
    if(checkedFarenheit === true){
      document.getElementById("output").innerHTML = Math.round(cToF(input))+ "<p>&#8457</p>";
      document.getElementById("output").className = "output"
    }else {
      document.getElementById("output").innerHTML = Math.round(fToC(input))+ "<p>&#8451</p>";
      document.getElementById("output").className = "output"
    }
  }
}

function clear() {
  return function () {
    document.getElementById("input").value = "";
  }
}


document.getElementById("submit").addEventListener("click", getInput());
document.getElementById("submit").addEventListener("click", giveOutput());
document.getElementById("clear").addEventListener("click", clear());

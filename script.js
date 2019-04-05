function cow() {
  var milk = parseInt(document.getElementById("cow-amount").value) * 120;
  var people = parseInt(document.getElementById("cow-children").value) + 2;
  var total = 0;
  milk -= people * 20;
  if (document.getElementById("cow-donate").checked === true) {
    milk -= parseInt(document.getElementById("cow-donated").value);
  }
  if (document.getElementById("cow-butter").checked === true) {
    if (milk >= 20) {
      total += 72;
      milk -= 20;
    }else if (milk >= 10) {
      total += 36;
      milk -= 10;
    }
  }
  if (document.getElementById("cow-cheese").checked === true) {
    if (milk >= 1) {
      total += milk * 2;
      milk = 0;
    }
  }
  document.getElementById("cow-output").value = total + " pence";
}
function sheep() {
  var sheeps = document.getElementById("sheep-amount").value;
  document.getElementById("sheep-output").value = (sheeps * 9) + " pence";
}
function bees() {
  var honey = parseInt(document.getElementById("bees-amount").value) * 3;
  var wax = parseInt(document.getElementById("bees-amount").value) * 2;
  var total = 0;
  if (document.getElementById("bees-honey").checked === true) {
    if (honey >= 4) {
      total += 44;
    }else if (honey >= 1) {
      total += honey * 11;
    }
  }
  if (document.getElementById("bees-wax").checked === true) {
    total += wax;
  }
  document.getElementById("bees-output").value = total + " pence";
}
function vintner() {
  var wine = parseInt(document.getElementById("vines-amount").value);
  if (document.getElementById("vines-bees").checked === true) {
    wine += Math.abs(wine / 2);
  }
  document.getElementById("vines-output").value = (wine * 12) + " pence";
}

function pence() {
  var pence = parseInt(document.getElementById("p-amount").value);
  var pounds = (pence - (pence % 240)) / 240;
  pence -= pounds * 240;
  document.getElementById("p-output-pounds").value = pounds + " pound(s)";
  document.getElementById("p-output-shillings").value = ((pence - (pence % 12)) / 12) + " shilling(s)";
  document.getElementById("p-output-pence").value = (pence % 12) + " pence";
}

function conv() {
  var pounds = parseInt(document.getElementById("conv-pound").value);
  var shillings = parseInt(document.getElementById("conv-shilling").value);
  var pence = parseInt(document.getElementById("conv-pence").value);
  var total = (pounds * 240) + (shillings * 12) + pence;
  document.getElementById("conv-output").value = total + " pence";
}
window.onload = function () {if(localStorage.getItem('dtuhattc')!=null){document.getElementById("access").style.display="block";document.getElementById("noaccess").style.display="none";}};

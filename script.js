function show(x) {
  let g = ["cows", "shep", "bees", "vint", "pnce", "dllr"];
  console.log(g);
  for(let y=0;y<g.length;y++) {
    console.log(g[y]);
    document.getElementById(g[y]).style.display = null;
    document.getElementById(g[y] + "7").style.background = null;
  }
  document.getElementById(x).style.display = "block";
  document.getElementById(x + "7").style.background = "#ff5555";
}

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
  if(wine.toString() === "NaN") {
    wine = 0;
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

function todollar() {
  var A1 = parseInt(document.getElementById("pence").value);
  var total = 0;
  if (A1 < 250) {
    total = 0;
  }else {
    if (A1 > 1000) {
      if (A1 > 50000) {
        if (A1 <= 850000) {
          total = (((A1 - (A1 % 250)) / 250) - (50000 / 250)) * 1000 + 3340000;
        }else {
          if (A1 > 25000000) {
            if (A1 > 100000000) {
              total = (12489000 + ((((A1 / 250) - (25000000 / 250))) * 3.25));
            }else {
              total = (((A1 - (A1 % 250)) / 250) -(850000 / 250)) * 15 + 6540000;
            }
          }else {
            total = 6540000 + (((A1 / 250) - (850000 / 250) / 250) * 15);
          }
        }
      }else {
        total = (((A1 - (A1 % 250)) / 250) -4) * 15000 + 400000;
      }
    }else {
      total = (A1 - (A1 % 250)) / 250 * 100000;
    }
  }
  document.getElementById("pencedone").value = "$" + Math.round(total);
}

function topence() {
  var value = 0;
  var x = document.getElementById('fakedollars').value;
  var m = (x - (x % 100000)) / 100000;
  if (x <= 100000) {
    value = 0;
  }else {
    if (x > 400000) {
      if (x > 3340000) {
        if (x <= 6540000) {
          value = (((x - 3340000) / 1000) + (50000 / 250)) * 250;
        }else {
          if (x > 8039796) {
            if (x > 12489000) {
              value = (((x - 12489000) / 3.25) + (25000000 / 250)) * 250;
            }else {
              value = (((x - 6540000) / 15) + (850000 / 250)) * 250;
            }
          }else {
            value = (((x - 6540000) / 15) + 13.6) * 250;
          }
        }
      }else {
        value = (((x - 400000) / 15000) + 4) * 250;
      }
    }else {
      value = ((x / 100000) * 250);
    }
  }
  document.getElementById('fd-done').value = value;
}

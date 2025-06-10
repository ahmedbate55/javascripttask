// function agecalc() {
//   let getage = +prompt("enter your age: ");
//   let agevalue = 2025 - getage;
//   console.log(`you age is:  ${agevalue}`);
// }
let fanstatus = false;
let fanspeed = 0;
let fantempreature = 0;
function fanclose() {
  if (fanstatus) {
    fanstatus = false;
    fanspeed = 0;
    fantempreature = 0;
    console.log("fan is closed , speed is 0 , fantempreture is 0");
  }
}
function fanopen() {
  if (fanstatus == false) {
    fanstatus = true;
    fanspeed = 1;
    fantempreature = 16;
    console.log("fan is open , speed is 1 , fantempreture is 16");
  }
}
function fanspeedincreas() {
  if (fanstatus && fanspeed < 3) {
    fanspeed++;
    console.log(`fan speed is ${fanspeed} `);
  }
}
function tempicreas() {
  if (fanstatus && fantempreature < 29) {
    fantempreature++;
    console.log(`fan tempreture is ${fantempreature} `);
  }
}
function temdecreas() {
  if (fanstatus && fantempreature > 16) {
    fantempreature--;
    console.log(`fan tempreture is ${fantempreature} `);
  }
}

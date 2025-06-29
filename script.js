let balance = 0;
let transactionhistory = [];
let table = document.querySelector("table thead");

let showtansaction = () => {
  let tbody = document.querySelector("table tbody");
  tbody.innerHTML = "";

  transactionhistory.forEach((el, index) => {
    let row = `<tr>
      <td>${index + 1}</td>
      <td>${el.type}</td>
      <td>${el.amounte}</td>
      <td>${el.balancee}</td>
    </tr>`;
    tbody.innerHTML += row;
  });
};

let showbalance = () => {
  let p = document.querySelector("p");
  p.innerText = `your balance is ${balance}`;
};

let depositfun = () => {
  let input = document.querySelector("#takeit");
  let amount = +input.value;
  let showtran = {
    type: "deposit",
    amounte: amount,
    balancee: balance + amount,
  };
  balance += amount;
  transactionhistory.push(showtran);
  showbalance();
};

let withdrawfun = () => {
  let input = document.querySelector("#with");
  let amount = +input.value;
  if (balance >= amount) {
    let showtran = {
      type: "wirhdraw",
      amounte: amount,
      balancee: balance - amount,
    };
    balance -= amount;
    showbalance();
  }
};

// let balance = 0;
// let transactionhystory = [];
// const password = "ahmednasser";
// let showinfromaion = () => {
//   console.log(`
//   welcome to bank account.
//   1-deposite
//   2-withdraw
//   3-showbalance
//     `);
// };
// let askuser = () => {
//   console.clear();
//   showinfromaion();
//   let askfornumber = +prompt("enter your choise from ( 1 to 3 )");
//   if (askfornumber == 1) {
//     depositfun();
//   } else if (askfornumber == 2) {
//     withdrawfun();
//   } else if (askfornumber == 3) {
//     showbalance();
//   } else {
//     console.log("pick 1 to 3 !");
//   }
// };
// let showmytransaction = () => {
//   console.clear();
//   console.table(transactionhystory);
// };

// let showbalance = () => {
//   let askuserforpassword = prompt("enter your pawwsord");
//   if (askuserforpassword == password) {
//     console.clear();
//     console.log(`your balance is ${balance}`);
//   }
// };

// let depositfun = () => {
//   let amount = +prompt("how many money you want to add?");
//   let transaction = {
//     balancebefore: balance,
//     type: "depsoit",
//     amountofmoney: amount,
//     balaceafter: balance + amount,
//   };
//   transactionhystory.push(transaction);
//   balance += amount;
//   showbalance();
// };

// let withdrawfun = () => {
//   let amount = +prompt("how many money you want to withdraw?");
//   if (balance >= amount) {
//     let transaction = {
//       balancebefore: balance,
//       type: "withdraw",
//       amountofmoney: amount,
//       balaceafter: balance - amount,
//     };
//     transactionhystory.push(transaction);
//     balance -= amount;
//     showbalance();
//   } else {
//     alert("you can't withdraw this amount!");
//   }
// };
// let deletefun = () => {
//   let askuserfordel = +prompt("enter the number you want to delete : ");
//   transactionhystory.splice(askuserfordel, 1);
//   showmytransaction();
// };

// fatora ll supermarket
let fatora = 0;
let items = [
  { name: "doretos", price: 35, qty: 3 },
  { name: "crunshy", price: 55, qty: 1 },
  { name: "orange juice", price: 35, qty: 5 },
];
let showitems = () => {
  console.clear();
  console.table(items);
  console.log(`
    fatora value is: ${calcFatora()}
    `);
};

let showfatora = () => {
  console.clear();
  console.log(`
    fatora value is: ${fatora}
    `);
};

let calcFatora = () => {
  let fatora = 0;
  items.forEach((el) => {
    fatora += el.price * el.qty;
  });
  return fatora;
};

let itemsOfFatore = () => {
  let add = {
    name: prompt("enter what you take: "),
    price: +prompt("enter the price"),
    qty: +prompt("enter the number of quantity"),
  };
  items.push(add);
  showitems();
};

let deleteitems = () => {
  let number = +prompt("enter the number of index you want to delete it: ");
  items.splice(number, 1);
  showitems();
};

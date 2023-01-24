let bill = prompt('What is your bill value?');

let tip = bill >= 50 && bill <= 300 ? bill / 100 * 15 : bill / 100 * 20;

console.log(`\"The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}\"`)
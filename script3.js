// let averageDolphinsScore = (96 + 108 + 89) / 3;
// let averageKoalasScore = (88 + 91 + 110) / 3;
// if (averageDolphinsScore > averageKoalasScore) {
//     console.log("The winner is team Dolphins.");
// } else if (averageDolphinsScore < averageKoalasScore) {
//     console.log("The winner is team Koalas.");
// } else {
//     console.log("It is a draw.");
// }

// averageDolphinsScore = (97 + 112 + 101) / 3;
// averageKoalasScore = (109 + 95 + 123) / 3;
// if (averageDolphinsScore > averageKoalasScore && averageDolphinsScore >= 100) {
//     console.log("The winner is team Dolphins.");
// } else if (averageDolphinsScore < averageKoalasScore && averageKoalasScore >= 100) {
//     console.log("The winner is team Koalas.");
// } else {
//     console.log("It is a draw.");
// }

// averageDolphinsScore = (97 + 112 + 101) / 3;
// averageKoalasScore = (109 + 95 + 106) / 3;
// if (averageDolphinsScore > averageKoalasScore && averageDolphinsScore >= 100) {
//     console.log("The winner is team Dolphins.");
// } else if (averageDolphinsScore < averageKoalasScore && averageKoalasScore >= 100) {
//     console.log("The winner is team Koalas.");
// } else if (averageDolphinsScore = averageKoalasScore && averageDolphinsScore + averageKoalasScore >= 200) {
//     console.log("It is a draw.");
// } else {
//     console.log("There is no winner.");
// }


//CODING CHALLENGE 1:
const calcAverage = (a, b, c) => (a + b + c) / 3;

const dolphinsScore = calcAverage(10, 54, 41);
const koalasScore = calcAverage(23, 34, 27);

const checkWinner = function(avgDolphins, avgKoalas) {
    avgDolphins >= 2 * avgKoalas ? console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`) :
    avgKoalas >= 2 * avgDolphins ? console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`) : console.log(`No one wins.`)
}

checkWinner(dolphinsScore, koalasScore);

//CODING CHALLENGE 2:
function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        return tip = bill / 100 * 15;
    } else {
        return tip = bill / 100 * 20;
    }
}

calcTip(100);
console.log(tip);

let bills = [125, 555, 44];
let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
let total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills);
console.log(tips);
console.log(total);

//CODING CHALLENGE 3:
const markBMI = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI() {
        return this["mass"] / this["height"] ** 2;
    } 
};

const johnBMI = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI() {
        return this.mass / this.height ** 2;
    }
};



johnBMI.calcBMI() > markBMI.calcBMI() ? console.log(`${johnBMI.fullName}'s (${johnBMI.calcBMI()}) is higher than ${markBMI.fullName}'s (${markBMI.calcBMI()})`) : 
    console.log(`${markBMI.fullName}'s (${markBMI.calcBMI()}) is higher than ${johnBMI.fullName}'s (${johnBMI.calcBMI()})`);

//ASSIGNMENT LECTURE: Iteration: The for Loop
for (let vote = 1; vote <= 50; vote++) {
    console.log(`Voter number ${vote} is currently voting.`);
}

//ASSIGNMENT LECTURE: Looping Arrays, Breaking and Continuing
const populations = [95, 18, 104, 31];

function percentageOfWorld1 (population) {
    return population / 7900 * 100;
}

console.log(percentageOfWorld1(populations[0]));

const percentages = [
    percentageOfWorld1(populations[0]), 
    percentageOfWorld1(populations[1]), 
    percentageOfWorld1(populations[2]), 
    percentageOfWorld1(populations[3])];
console.log(percentages);

const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
    percentages2.push(percentageOfWorld1(populations[i]));
}

console.log(percentages2);

//(NOT FINISH) ASSIGNMENT LECTURE: Looping Backwards and Loops in Loops 
const jonas = [
    'Jonas',
    'Smith',
    2037 - 1991,
    'teacher'
    ['Michael', 'James', 'Jimmy']
];

for (let i = jonas.length - 1; i >= 0; i--) {

} 


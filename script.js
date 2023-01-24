//The switch Statement
let language = prompt('What language do you speak?');

switch(language) {
    case 'chinese': 
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
}

//The Conditional (Ternary) Operator
let country = "Vietnam";
let population = "95";

population > 33 ? console.log(`${country}'s population is above average.`) : console.log(`${country}'s population is below average.`);
//create an  array of numbers and returns a new array with only the odd numbers from the original array. 
//if there is only one off number in the array, return an array with that single value.

// const numberarray = [2, 4, 6, 8, 11, 20, 15, 22];
// for(let i = 0; i < numberarray.length; i++) {
//     if (numberarray[i] % 2 === 1){
//         oddsArray.push(numberarray[i]);
//     }
// }

// console.log(oddsArray);

// const numberarray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for(let i = 0; i < numberarray2.length; i++) {
//     if (numberarray2[i] % 2 === 1){
//         oddsArray.push(numberarray2[i]);
//     }
// }
// console.log(oddsArray);

// const numberarray3 = [70, 42, 55, 81, 21, 91, 34];
// for(let i = 0; i < numberarray3.length; i++) {
//     if(numberarray3[i] % 2 === 1){
//         oddsArray.push(numberarray3[i]);
//     }
// }
// console.log(oddsArray);

// const numberarray4 = [2, 4, 6, 8, 10, 11, 12];
// for(let i = 0; i < numberarray4.length; i++) {
//     if(numberarray4[i] % 2 === 1){
//         oddsArray.push(numberarray4[i]);
//     }
// }

// console.log(oddsArray);



//create a code that accepts a string of lowercase letters
//print the word followed by how many consonants and vowels it has
//"a", "e", "i", "o", and "u" are considered vowels
//Every other letter is considered a consonant

// const myString = "hello";
// const vowels = ["a", "e", "i", "o", "u"];
// const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];

// let vowelLetters = 0;
// let consonantLetters = 0;

// const lowerCase = myString.toLowerCase();

// for (let i = 0; i < lowerCase.length; i++) {
//     const charac = lowerCase[i];

//     if (vowels.includes(charac)) {
//         vowelLetters++;
//     } else if (consonants.includes(charac)) {
//         consonantLetters++;
//     }
// }
// console.log(myString + " has " + consonantLetters + " consonant " + vowelLetters + " vowels ");


// const ukelelearray = [ukelele];

// const awesomearray = [awesome];

// const onomonopiaarray = [onomonopia];

// const textbookarray = [textbook];

//with a for loop, create a code that creates a new array in reverse order. 

// const reversearray1 = [1, 2, 3]
// const reversearray2 = [1, 3, 5, 7, 9, 11]
// const reversearray3 = [20, 50, 30, 60, 200]
// const reversearray4 = [1, -1, 2, -3, 5, -8, 13]

// const comboArray = [...reversearray4, ...reversearray3, ...reversearray2, ...reversearray1];
// console.log(comboArray);

// create a JavaScript code that prints each number from 1 to 100 on a new line
// for each multiple of 3, print "Fizz" instead of the number
// For each multiple of 5, print "Buzz" instead of the number
// For numbers that are multiples of both 3 and 5, print "FizzBuzz" instead of the number

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


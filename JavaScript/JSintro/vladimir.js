// var a = 5;
// alert("This is a greeting from javascript!!");

// var result = calculatePrice("vladimir", a);
// var result2 = calculatePrice(650, 60);

// alert(result);
// alert(result2);

// function calculatePrice(price, quantity) {
//     var result = price * quantity;
//     return result;
// }

// function sayHi() {
//     var greeting = "HAI";
//     console.log(greeting);
// }
// sayHi();
// console.log(greeting);

// function convertTemperature(temperature, type) {
//     var result = 0;

//     if (type === "celsius") {
//         result = temperature * 1.8 + 32;
//     } else if (type == "fahrenheit") {
//         result = (5/9) * (temperature - 32);
//     } 
    
//     return result;
// }

// var fahr = convertTemperature(38, "celsius");
// var cels = convertTemperature(88, "fahrenheit");
// var sameNum = convertTemperature(300);

// function calculateTotalPrice(itemPrice) {
//     return itemPrice * 1.05 * 1.18;
// }

// var priceOfTrotinetFromSolun = calculateTotalPrice(420);

// var userInput = prompt("Enter a number");


// function sayHi() {
//     var i = 0;
//     while (i <= 20) {
//         console.log("Hai there");
//         i++;
//         if (i === 10) {
//             return;
//         }
//     }

//     console.log("Function has ended");
// }

// sayHi();

// function getBiggest() {
//     var biggest = 0;
//     var i = 0;
//     while (i < 10) {
//         var randomNum = Math.random();
//         console.log("current number is ", randomNum);
//         if (randomNum > biggest) {
//             biggest = randomNum;
//         }
//         i++;
//     }
//     console.log("biggest number is ", biggest);
// }

// getBiggest();

// function sumOfSquares() {
//     var i = 101;
//     var suma = 0;
//     while(i <= 150) {
//         var squared = Math.pow(i, 2);
//         console.log("the current iteration is ", squared);
//         suma += squared;
//         i++;
//     }
//     console.log("the result is ", suma);
// }

// sumOfSquares();

// function sumOfNumbers(number) {
//     var suma = 0;

//     while(number) {
//         var cifra = number % 10;
//         suma += cifra;
//         number = Math.floor(number / 10);
//     }

//     console.log("the sum is ", suma);
// }

// sumOfNumbers(3453);

// function evenOdd() {
//     for (var index = 0; index <= 15; index++) {
//         if (index % 2 === 0) {
//             console.log ("the number " + i + " is even");
//         } else {
//             console.log ("the number " + i + " is odd");
//         }
//     }
// }
// evenOdd();

// function fizz() {
//     for (var index = 1; index <= 100; index++) {
//         if (index % 5 === 0 && index % 3 === 0) {
//             console.log ("FizzBuzz");
//         } else if (index % 5 === 0) {
//             console.log ("Buzz");
//         } else if (index % 3 === 0) {
//             console.log ("Fizz");
//         } else {
//             console.log ("this is a regular number"); //optional
//         }
//     }
// }
// fizz();

// function armstrong() {
//     for (var index = 100; index < 1000; index++) {
//         var result = sumOfCubes(index);

//         if (result === index) {
//             console.log(index + " is an armstrong number");
//         }
//     }
// }

// function sumOfCubes(number) {
//     var suma = 0;

//     while(number) {
//         var cifra = number % 10;
//         suma += Math.pow(cifra, 3);
//         number = Math.floor(number / 10);
//     }

//     return suma;
// }

// armstrong();



// function sumOfMultiples(min, max) {
//     var suma = 0;
//     for (var index = min; index < max; index++) {
//         if (index % 5 === 0 && index % 3 === 0) {
//             suma += index;
//         }
//     }

//     console.log("The sum is " + suma);
// }

// sumOfMultiples(234, 34345436);

// function sumOfRange(min, max) {
//     var suma = 0;
//     for (var index = min; index < max; index++) {
//         suma += index; 
//     }

//     console.log("The sum is " + suma.toString());
// }





// function totallyDifferent(n, x) {
//     while (true) {
//         n++;
//         var diffNumbers = areDifferent(n, x);
//         if (diffNumbers) {
//             console.log("the numbers are totally different ", n, x);
//             return;
//         }
//     }
// }

// function areDifferent(num1, num2) {
//     while(num1) {
//         var secondary = num2;
//         var firstDigit = num1 % 10;
//         while (secondary) {
//             var secondDigit = secondary % 10;
//             if (firstDigit === secondDigit) {
//                 return false;
//             }
//             secondary = Math.floor(secondary / 10);
//         }
//         num1 = Math.floor(num1 / 10);
//     }

//     return true;
// }


// function findMetters (meter) {
//     var feet = 0.3048;
//     feet = feet * meter;
//     alert (feet + " metters");

// }

// findMetters (15);


// function calculateRectangle (a,b) {
//     var result = a * b;
//     console.log(result);
// }

// calculateRectangle ();



// function calculatePrice (iPhone, quantity) {
//     var taxRate = iPhone * 0.18;
//     var customsRate = iPhone * 0.05;
//     var result = (iPhone + taxRate + customsRate) * quantity
//     console.log("$ " + result);
// }

// calculatePrice (899.95, 30);


// function user (money) {
//     if (money > 500) {
//         alert("go out");
//     }

//     else if (money > 100) {
//             alert("go buy burger")
//     }
//     else {
//             alert ("stay home");
//     }
// }

// user(90);

// function tenValues () {

//     var i = 0;
//     var max = 0;

//     while (i < 20){
//         var random = Math.floor(Math.random() * 10) + 1  ;
        
//         console.log (random);

//         if (random > max){
//             max = random;
//         }

//         i++;
//     }
//     console.log ("the max number is" + max);
// }

// tenValues ()


// function sumOfSquares () {
//     var i = 101;
//     var result = 0;
//     while (i <= 150) {
//         result += Math.pow(i, 2);
//         i++;
//     }
//     console.log(result);
// }

// sumOfSquares ()


// var num = 1;

// while (num <= 100) {
//     document.write("number" + num + "<br>");
//     num += 1;
// }






// // function iterateNumber(){

// //     for (var i=0; i<=15; i++) {
// //         if (i === 0) {
// //             console.log(i +  " is even");
// //         }
// //         else if (i % 2 === 0) {
// //             console.log(i + " is even");   
// //         }
// //         else {
// //             console.log(i + " is odd");
// //         }
// //     }
    
// // }

// // iterateNumber ();





// // function fizz() {

// //     for (var i = 1; i <= 100; i++) {
// //         if (i % 3 === 0 && i % 5 === 0){
// //             console.log(i + "fizzbuzz");
// //         }
// //         else if (i % 3 === 0) {
// //             console.log(i + "fizz");
// //         }
// //         else if (i % 5 === 0) {
// //             console.log(i + "buzz");
// //         }
// //         else {
// //             console.log(i);
// //         }
// // }
// // }

// // fizz();


// // function armstrongNumber () {
// //     for (var i = 1; i < 10; i++) {
// //         for (var x = 0; x < 10; x++) {
// //             for (var y = 0; y < 10; y++) {
// //                 var result = (Math.pow(i, 3) + Math.pow(x, 3) + Math.pow(y, 3));
// //                 var suma = (i * 100 + x * 10 + y);
// //                 if (result == suma){
// //                     console.log(result);
                
// //                 }
// //             }
// //         }
         
// //     }
// // }

// // armstrongNumber ();



// // function armstrong() {
// //     for (var i=100; i<1000; i++) {
// //         var result = sumOfCubes(i);

// //         if (result === i) {
// //             console.log (i + " is an armstrong number");
// //         }

// //     }
// // }

// // function sumOfCubes (number) {
// //     var sum = 0;

// //     while (number) {
// //         var cifra = number % 10;
// //         sum += Math.pow(cifra, 3);
// //         number = Math.floor (number / 10);
        
// //     }
    
// //     return sum;
// // }

// // armstrong();




// // function sumOfmultiples (min, max) {
// //     var sum = 0;

// //     for (var index = min; index < max; index++) {
// //         if (index % 3 === 0 && index % 5 === 0) {
// //         sum += index;
// //         }
// //     }


// //     console.log(sum);

// // }

// // sumOfmultiples (0, 30000);





// // function sumOfTwo (num1, num2) {
// //     var sum = 0;

// //     for (var index = num1; index <= num2; index++) {
// //         sum += index;
// //     }

// //     console.log(sum);

// // }

// // sumOfTwo(3, 5);




// function twoNumbers (n , x) {
//     while (true) {
//         n++;
//         var diffNumber = areDifferent (n, x);
//         if (diffNumber) {
//             console.log("the number are totally diffrent ", n, x);
//             return 
//         }
//     }

// }

// function areDifferent (num1, num2) {
    
//     while (num1) {
//         var secondary = num2;
//         var firstDigit = num1 % 10;
//         while (secondary) {
//             var secondDigit = secondary % 10;
//             if (firstDigit === secondDigit) {
//                 return false;
//             }
//             secondary = Math.floor(secondary / 10);
//         }
//         num1 = Math.floor(num1/ 10);
//     }
//     return true;
// }


// twoNumbers()


// function sumOfMultiples(min, max) {
//     var suma = 0;
//     for (var num = min; num < max; num++) {
//         if (num % 5 === 0 && num % 3 === 0) {
//             suma += num;
//         }
//     }

//     console.log("The sum is " + suma);
// }




// function sumOfRange(min, max) {
//     var suma = 0;
//     var i = 2;
//     for (var num = min; num < max; num++) {
//         while (num % i == 0) {
//             suma = num - -suma;
//             num++; 

//         }
//         suma += num; 
//     }
//     console.log("The sum is " + suma.toString());
// }


// function isPrime(num) {
//     var sqrtnum=Math.floor(Math.sqrt(num));
//     var prime = num != 1;
//     for(var i=2; i<sqrtnum+1; i++) { // sqrtnum+1
//         if(num % i == 0) {
//             prime = false;
//             break;
//         }
//     }
//     return prime;
// }




// function isPrime(n) {

//     // If n is less than 2 or not an integer then by definition cannot be prime.
//     if (n < 2) {return false}
//     if (n != Math.round(n)) {return false}
    
//     // Now assume that n is prime,try to prove that it is not.
//     var isPrime = true;
    
//     // Now check every whole number from 2 to the square root of n. If any of these divides n exactly, n cannot be prime.
//     for (var i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i == 0) {isPrime = false}
//     }
    
//     // Finally return whether n is prime or not.
//     return isPrime;
// }






